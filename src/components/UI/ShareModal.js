import { useState } from "react";

const ShareModal = (props) => {
  const [username, setUsername] = useState(null);

  const shareButtonHandler = () => {
    // fetch data to the api with props.userId, props.planId, username

    // clean the input field after clicking

    console.log(username);
  };

  return (
    <div className="modal" id="shareModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Share</h5>
            <button className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={shareButtonHandler}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
