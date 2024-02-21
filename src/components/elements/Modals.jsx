const Modals = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Maaf <i className="bi bi-emoji-frown fs-3"></i>
            </h1>
          </div>
          <div className="modal-body">
            <p>
              Saat ini layanan order online dalam perbaikan. <br />
              Mohon coba beberapa saat lagi. Terimakasih !
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
