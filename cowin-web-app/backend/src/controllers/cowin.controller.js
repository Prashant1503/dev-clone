const {
  fetchStatesViaApi,
  fetchAllStates,
  fetchStateByStateName,
} = require("../services/cowin.services");

module.exports = {
  addStatesData: async (req, res) => {
    await fetchStatesViaApi()
      .then((states) => {
        return res.json({ states });
      })
      .catch((err) => {
        return res.json({ err });
      });
  },

  fetchStatesData: async (req, res) => {
    await fetchAllStates()
      .then((states) => {
        return res.json({ states });
      })
      .catch((err) => {
        return res.json({ err });
      });
  },

  getStateByName: async (req, res) => {
    let stateName = req.params.name;

    await fetchStateByStateName(stateName)
      .then((result) => {
        return res.json({ stateId: result });
      })
      .catch((err) => {
        return res.json({ err });
      });
  },
};
