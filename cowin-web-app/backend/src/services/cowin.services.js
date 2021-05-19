const States = require("../../models").States;
const { default: axios } = require("axios");

const url = require("../constants/constants");

/** @function : add states data */
exports.fetchStatesViaApi = () => {
  let state = {};
  let res;

  return new Promise(async (resolve, reject) => {
    try {
      await axios
        .get(url.public_report_api)
        .then((response) => response.data)
        .then(async (result) => {
          let data = result.getBeneficiariesGroupBy;

          for (let i = 0; i < data.length; i++) {
            state["state_id"] = data[i].state_id;
            state["state_name"] = data[i].state_name;

            res = await addStates(state);
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    } catch (e) {
      reject(e);
    }
  });
};

/** @function : Inserting states into db */
const addStates = (state) => {
  return new Promise(async (resolve, reject) => {
    await States.create({
      state_id: state.state_id,
      state_name: state.state_name,
    })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/** @function : fetch state list from db */

exports.fetchAllStates = async () => {
  return new Promise(async (resolve, reject) => {
    await States.findAll({})
      .then((states) => {
        resolve(states);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/** @function : fetch state by id */
exports.fetchStateByStateName = async (stateName) => {
  return new Promise(async (resolve, reject) => {
    await States.findOne({
      where: {
        state_name: stateName,
      },
    })
      .then((result) => {
        let stateId = result.state_id;

        resolve(stateId);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
