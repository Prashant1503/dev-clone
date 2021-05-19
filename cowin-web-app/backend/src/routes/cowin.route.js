const route = require("express").Router();
const {
  addStatesData,
  fetchStatesData,
  getStateByName,
} = require("../controllers/cowin.controller");

/**  @route : /add-states */
route.post("/add-states", addStatesData);

/** @route : /states/ */
route.get("/states", fetchStatesData);

module.exports = route;
