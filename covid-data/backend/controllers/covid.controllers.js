const {

    getCasesSummary,
    addSummary,
    getDistrictCasesViaState,
    getStateCases,
    addStateData

} = require('../services/covid.service');
module.exports = {

    getCasesViaDistrict: async (req, res) => {

        await getDistrictCasesViaState()
            .then((state) => {
                return res.json({ state });
            })
            .catch(err => {
                return res.json({ err });
            });

    },

    addDistricts: async (req, res) => {

    },

    addStates: async (req, res) => {

        await addStateData()
            .then((data) => {
                return res.status(200).json({ data });
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json({ err });
            });

    },

    getStatesData: async (req, res) => {

        await getStateCases()
            .then((cases) => {
                return res.status(200).json({ state: cases });
            })
            .catch(err => {
                return res.status(400).json({ err });
            });

    },

    retreiveTotalCasesSummary: async (req, res) => {

        await getCasesSummary()
            .then((summary) => {

                return res.status(200).json({ summary });
            })
            .catch(err => {
                return res.status(500).json({ err });
            })


    },

    createSummary: async (req, res) => {

        await addSummary()
            .then((summary) => {
                return res.status(200).json({ summary });
            })
            .catch(err => {
                return res.status(400).json({ err });
            });
    }


}