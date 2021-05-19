const route = require('express').Router();
const { default: axios } = require('axios');


/** Schema's */
const State = require('../models').State;
const Summary = require('../models').Summary;


const {
    retreiveTotalCasesSummary,
    createSummary,
    getCasesViaDistrict,
    getStatesData,
    addStates
} = require('../controllers/covid.controllers');


/**
 * @api : /add-state
 */
route.post('/add-state', addStates);


/**
 * @route : /states
 * @description : retreive all states data
 */
route.get('/states', getStatesData);

/**
 * @route : /add-summary
 * @description : add covid-19 total cases summary count 
 */
route.post('/add-summary', createSummary);

/**
 * @route : /summary
 * @description : retreive total count of world cases
 */
route.get('/summary', retreiveTotalCasesSummary);

/**
 * @route : /add-districts
 * @description : add districts under particular state
 */
route.post('/states/district-cases', getCasesViaDistrict);

module.exports = route;