const State = require('../models').State;
const District = require('../models').District;
const Summary = require('../models').Summary;

const axios = require('axios');

const { urls } = require('../constants/constant');

/** @function : get total world cases summary count */
exports.getCasesSummary = () => {

    return new Promise(async (resolve, reject) => {
        await Summary.findAll({})
            .then((summary) => {

                console.log(typeof (summary));
                resolve(summary);
            })
            .catch(err => {
                reject(err);
            });

    });
}


/** @function : add summary  */
exports.addSummary = () => {

    let fetchSummaryData = new Promise(async (resolve, reject) => {

        try {
            await axios.get(urls.countryUrl)
                .then((result) => result.data)
                .then(async (result) => {

                    let totalCount = result.data.summary;

                    resolve(totalCount);
                })
                .catch(err => {
                    reject(err);
                })
        } catch (e) {
            reject(e);
        }
    });

    return new Promise(async (resolve, reject) => {

        try {

            await fetchSummaryData
                .then(async (totalCount) => {

                    try {

                        await Summary.findOrCreate({
                            where: {
                                "total": totalCount.total,
                                "confirmedCasesIndian": totalCount.confirmedCasesIndian,
                                "confirmedCaseForeigh": totalCount.confirmedCasesForeign,
                                "discharged": totalCount.discharged,
                                "deaths": totalCount.deaths
                            }
                        })
                            .then(([summary, created]) => {

                                if (!created) {
                                    reject("Summary already exists!");
                                }
                                resolve(summary);
                            })
                            .catch(err => {
                                reject(err);
                            });
                    } catch (e) {
                        reject(e);
                    }
                })
                .catch(err => {
                    reject(err);
                })
        } catch (e) {
            reject(e);
        }
    });
}

/** @function : add cases via district for each state  */
exports.getDistrictCasesViaState = () => {

    let districtCasesPromise = new Promise(async (resolve, reject) => {

        try {

            await axios.get(urls.districtUrl)
                .then((response) => {

                    let responseData = response.data;

                    let state = {};
                    let district = {};
                    let districtData = {};
                    let stKey;


                    /** retreiving all state keys */
                    for (let stateKeys in responseData) {

                        stKey = stateKeys;
                        let districtValues = responseData[stateKeys].districtData;

                        district = new Object();

                        for (let districtKeys in districtValues) {


                            let districtCases = districtValues[districtKeys];

                            district['active'] = districtCases.active;
                            district['confirmed'] = districtCases.confirmed;
                            district['deceased'] = districtCases.deceased;
                            district['recovered'] = districtCases.recovered;


                            districtData[districtKeys] = district;
                            state[stateKeys] = districtData;
                        }
                    }
                    return resolve([stKey, districtData]);

                    // add(state);


                })

                .catch(err => {

                    reject(err);
                });
        } catch (e) {
            reject(e);
        }
    });

    return new Promise(async (resolve, reject) => {

        await districtCasesPromise
            .then(([stKey, districtData]) => {

                console.log('State key -->', stKey);
            })
            .catch(err => {
                reject(err);
            });
    })



}

const add = async (state) => {

    console.log(JSON.stringify(state));
    // console.log('State -->', state);

    // let stateValues;
    // let districtValues;
    // let dsKey;
    // let stKey;

    // for (let stateKeys in state) {

    //     stKey = stateKeys;
    //     stateValues = state[stateKeys];



    //     for (let districtKeys in stateValues) {
    //         dsKey = districtKeys;
    //         districtValues = stateValues[districtKeys];

    //         // await g(dsKey, districtValues, stKey);
    //     }

    // }



}


const g = (dsKey, districtValues, stKey) => {

    // console.log('State Keys -->', stateKeys);

    return new Promise(async (resolve, reject) => {

        try {
            await District.findOrCreate({
                where: {
                    "name": dsKey,
                    "active": districtValues.active,
                    "confirmed": districtValues.confirmed,
                    "deceased": districtValues.deceased,
                    "recovered": districtValues.recovered,
                    "state_id": stKey
                },
                include: [{
                    model: State,
                    foreignKey: "state_id"
                }]
            })
                .then((value) => {
                    resolve(value);
                })
                .catch(err => {
                    reject(err);
                });
        } catch (e) {
            reject(e);
        }
    });
}
/** @function : retreive state cases */
exports.getStateCases = () => {

    return new Promise(async (resolve, reject) => {

        try {
            await State.findAll({
            })
                .then((states) => {
                    resolve(states);
                })
                .catch(err => {
                    reject(err);
                })

        } catch (e) {
            reject(e);
        }
    });
}


/** @function : add states data via api call */
exports.addStateData = async () => {

    return new Promise(async (resolve, reject) => {

        let regionalData = {};
        let states = {};

        try {
            /** Api call for retreiving regional data */
            await axios.get(urls.countryUrl)
                .then(async (result) => {

                    let parentData = result.data;
                    let stateValues = parentData.data.regional;

                    for (let i = 0; i < stateValues.length; i++) {

                        regionalData = stateValues[i];

                        states = await statesData(regionalData);

                    }
                    resolve(states);


                })
                .catch(err => {
                    reject(err);
                });


        } catch (e) {
            reject(e);
        }

    });




}

const statesData = (regionalData) => {

    console.log(regionalData);
    return new Promise(async (resolve, reject) => {

        try {

            await State.findOrCreate({
                where: {
                    "loc": regionalData.loc,
                    "confirmedCases": regionalData.confirmedCasesIndian,
                    "discharged": regionalData.discharged,
                    "deaths": regionalData.deaths,
                    "totalConfirmed": regionalData.totalConfirmed
                }
            })
                .then((data) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                })
        } catch (e) {
            reject(e);
        }
    });

}
