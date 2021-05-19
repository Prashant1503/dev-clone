const base_url = "http://localhost:4001/api/cowin";
const cowin_api =
  "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date";

/** @function : get states list */
const showStatesData = async () => {
  let dropdown = document.getElementById("state");

  await fetch(base_url + "/states", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      let state = data.states;

      for (let i = 0; i < state.length; i++) {
        let optionTag = document.createElement("option");

        optionTag.text = state[i].state_name;
        optionTag.value = state[i].state_id;
        dropdown.add(optionTag);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

/** @function : fetch selected state record */
const fetchSelectedStateRecord = async () => {
  let stateId = document.getElementById("state").value;

  stateId.length = 0;

  let stateRecord = await getStateRecordById(stateId);
  let districtRecord = await getDistrictRecordByStateId(stateId);

  //   console.log(districtRecord);

  let dsData = districtRecord.getBeneficiariesGroupBy;

  /** show district name */
  let dropdown = document.getElementById("district");

  for (let i = 0; i < dsData.length; i++) {
    let optionTag = document.createElement("option");

    optionTag.value = dsData[i].district_id;
    optionTag.text = dsData[i].title;

    dropdown.add(optionTag);
  }

  /**  */
  console.log("StateRcd :", stateRecord);
  console.log("Dstrct record :", districtRecord);

  let sites = stateRecord.topBlock.sites;
  let vcn = stateRecord.topBlock.vaccination;

  /** Inserting sites vaccination count data */
  document.getElementById("total_vaccination_count").innerHTML =
    sites.total.toLocaleString("en-IN");
  document.getElementById("government_count").innerHTML =
    sites.govt.toLocaleString("en-IN");
  document.getElementById("private_count").innerHTML =
    sites.pvt.toLocaleString("en-IN");

  /** Inserting vaccination count in vaccination block */

  document.getElementById("total_vcn_count").innerHTML =
    vcn.total_doses.toLocaleString("en-IN");
  document.getElementById("dose_one").innerHTML =
    vcn.tot_dose_1.toLocaleString("en-IN");
  document.getElementById("dose_two").innerHTML =
    vcn.tot_dose_2.toLocaleString("en-IN");
};

/** @function : return's SelectedstateData */
const getStateRecordById = async (stateId) => {
  return new Promise(async (resolve, reject) => {
    await fetch(
      `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${stateId}&district_id=&date`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/** @function : get district record by stateId */
const getDistrictRecordByStateId = async (stateId) => {
  return new Promise(async (resolve, reject) => {
    await fetch(
      `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${stateId}&district_id=&date`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/** @function : show selected state + district count */
const fetchCount = async () => {
  let stateId = document.getElementById("state").value;
  let districtId = document.getElementById("district").value;

  console.log(`StateId : ${stateId}, districtId :${districtId}`);

  await fetch(
    `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${stateId}&district_id=${districtId}&date`,
    { method: "GET" }
  )
    .then((response) => response.json())
    .then((result) => {
      let sites = result.topBlock.sites;
      let vcn = result.topBlock.vaccination;

      showTotalCount(sites, vcn);
      //   console.log(vcn.total_doses);
    })
    .catch((err) => {
      console.log(err);
    });
};

/** @function : show total sites and vaccination count for district nd state */
const showTotalCount = (sites, vcn) => {
  /** Total sites count */
  document.getElementById("total_vaccination_count").innerHTML =
    sites.total.toLocaleString("en-IN");
  document.getElementById("government_count").innerHTML =
    sites.govt.toLocaleString("en-IN");
  document.getElementById("private_count").innerHTML =
    sites.pvt.toLocaleString("en-IN");

  /** Total vaccination count */
  document.getElementById("total_vcn_count").innerHTML =
    vcn.total_doses.toLocaleString("en-IN");
  document.getElementById("dose_one").innerHTML =
    vcn.tot_dose_1.toLocaleString("en-IN");
  document.getElementById("dose_two").innerHTML =
    vcn.tot_dose_2.toLocaleString("en-IN");
};
