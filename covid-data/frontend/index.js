let baseUrl = 'http://localhost:4001/api/';

/** @function : getWorldData */
function getWorldData() {

    fetch(baseUrl + 'summary')
        .then((result) => result.json())
        .then((data) => {

            let summary = data.summary;

            for (let i = 0; i < summary.length; i++) {

                let data = summary[i];


                document.getElementById("confirmed").innerHTML = ++data.confirmedCasesIndian;

                document.getElementById("active").innerHTML = ++data.confirmedCasesIndian;

                document.getElementById("recovered").innerHTML = ++data.confirmedCasesIndian;

                document.getElementById("deceased").innerHTML = ++data.confirmedCasesIndian;

            }
        })
        .catch(er => {
            console.log(er);
        })
}

const getStatesData = async () => {


    await fetch(baseUrl + 'states')
        .then((data) => data.json())
        .then((result) => {

            let res = result.state;

            // iterating each state value and calling function 
            for (let i = 0; i < res.length; i++) {
                showStateData(res[i]);

            }
        })
        .catch(err => {
            console.log(err);
        });
};

const showStateData = (res) => {

    let table, rowCount, row;

    table = document.getElementById("tb");
    rowCount = table.rows.length;

    row = table.insertRow(rowCount);



    row.setAttribute("id", res.id);
    row.insertCell(0).innerHTML = res.loc;
    row.insertCell(1).innerHTML = res.confirmedCases;
    row.insertCell(2).innerHTML = res.confirmedCases;
    row.insertCell(3).innerHTML = res.discharged;
    row.insertCell(4).innerHTML = res.deaths;


}



const refresh = async () => {

    await fetch(baseUrl + 'states')
        .then((data) => data.json())
        .then((result) => {

            let res = result.state;

            // iterating each state value and calling function 
            for (let i = 0; i < res.length; i++) {
                RefreshStateData(res[i]);

            }
        })
        .catch(err => {
            console.log(err);
        });
}

const RefreshStateData = async (res) => {

    console.log(res);

    let table, rowCount, row;

    table = document.getElementById("tb");
    rowCount = table.rows.length;

    row = table.insertRow(rowCount);

    row.setAttribute("id", res.id);
    row.insertCell(0).innerHTML = res.loc;
    row.insertCell(1).innerHTML = res.confirmedCases;
    row.insertCell(2).innerHTML = res.confirmedCases;
    row.insertCell(3).innerHTML = res.discharged;
    row.insertCell(4).innerHTML = res.deaths;



}


/** @function : add states data */
const addStatesData = async () => {

    await fetch(baseUrl + 'add-state', { method: "POST" })
        .then((res) => {

            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });


}

const deleteStateRecord = (row) => {

    console.log('delete at :' + row);
}

const getDistrictData = async () => {
    let states = {};
    let districtValue = {};
    let district = {};

    // get district data
    await fetch('https://api.covid19india.org/state_district_wise.json', {
        method: "GET"
    })
        .then((result) => result.json())
        .then((data) => {


            for (let keys in data) {

                let stateKeys = keys;
                let stateValues = data[keys].districtData;

                for (let districtKeys in stateValues) {
                    // console.log('District keys -->', districtKeys);

                    districtValue['active'] = stateValues[districtKeys].active;
                    districtValue['confirmed'] = stateValues[districtKeys].confirmed;
                    districtValue['deceased'] = stateValues[districtKeys].deceased;
                    districtValue['recovered'] = stateValues[districtKeys].recovered;


                    district[districtKeys] = districtValue;
                    states[stateKeys] = district;

                }

            }

            /** Get data by clicking on particular table row */
            // showDistricts(states);

        })
        .catch(err => {
            console.log(err);
        })
}


/** */



var table = document.getElementById("tb");
let rows = table.rows;
let rowCount = table.rows.length;


for (let i = 0; i < rowCount; i++) {

    rows[i].onClick = function () {

        let cells = this.cells;

        let title = document.getElementById("state");

        let res = title.value = cells[0].innerHTML;

        console.log(res);

    }
}



/**  */
fetch('https://www.postman.com/collections/59611e58e9901478264a', {
    method: "GET"
})
    .then((response) => response.json())
    .then((result) => {

        console.log('Result -->', result);
    })
    .catch(err => {
        console.log(err);
    });


