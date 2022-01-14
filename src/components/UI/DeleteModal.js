const DeleteModal = (props) => {
  const deleteButtonHandler = () => {
    // fetch data to the api with props.userId, props.planId, username
  };

  return (
    <div className="modal mt-5" id="deleteModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Share</h5>
            <button className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <p className="text-center">Are you sure that you want to delete?</p>
            <div className="row d-flex justify-content-around">
              <button className="btn btn-primary" data-dismiss="modal">
                Cancel
              </button>
              <button
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={deleteButtonHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
