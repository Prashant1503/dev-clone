import React from "react";
import "./dev_profile.css";

import { Button } from "../../../components/index";

const DevProfile = (props) => {
  return (
    <div className="card text-center w-35">
      <div className="col">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEPI-3VL8tRIA/profile-displayphoto-shrink_100_100/0/1618931934816?e=1627516800&amp;v=beta&amp;t=UfLoEIsAgR_rpRyWX5jDcXxAsPuSsDtS1vORqUVib2k"
          id="profile_img"
        ></img>

        <h5>{props.userName}</h5>
        <p>{props.userHeadline}</p>
        <Button title="Connect" id="connect_btn"></Button>
      </div>
    </div>
  );
};

export default DevProfile;
