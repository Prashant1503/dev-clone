import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <div className="card w-50 ">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEPI-3VL8tRIA/profile-displayphoto-shrink_100_100/0/1618931934816?e=1627516800&amp;v=beta&amp;t=UfLoEIsAgR_rpRyWX5jDcXxAsPuSsDtS1vORqUVib2k"
          id="profile_img"
        ></img>

        <div className="profile_name-section">
          <h5 className="text-align center">Prashant Vani</h5>
          <p>Android Development | Node.Js | Express.Js</p>
        </div>

        <hr></hr>
      </div>
    </>
  );
};

export default Profile;
