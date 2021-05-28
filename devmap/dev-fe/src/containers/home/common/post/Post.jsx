import React from "react";
import { Button, Input, Modal } from "../../../../components";
import "./post.css";

const Post = () => {
  const openModal = () => {
    return alert("Opening modal");
  };
  return (
    <>
      <div className="card">
        <div className="row">
          <img
            id="post_user-img"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEPI-3VL8tRIA/profile-displayphoto-shrink_100_100/0/1618931934816?e=1627516800&amp;v=beta&amp;t=UfLoEIsAgR_rpRyWX5jDcXxAsPuSsDtS1vORqUVib2k"
          />

          <div className="col">
            <Button
              className="post-input"
              title="Start a post"
              handleChange={openModal}
            />
          </div>
        </div>
        <div className="row-lg-12">
          <div className="col mt-2">
            {/* 1st item for photo */}
            <button>
              <i className="fas fa-image"></i>
              <span>Photo</span>
            </button>

            {/* 2nd item for video */}
            <button>
              <i className="fad fa-play"></i>
              <span>Videos</span>
            </button>

            {/* 4th item for emoji */}
            <button>
              <i className="far fa-newspaper"></i>
              <span>Write Article</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
