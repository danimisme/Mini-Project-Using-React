const CardMenu = () => {
  return (
    <div className="col-lg-4 col-md-6 col-8 mx-md-0 mx-auto">
      <div
        className="card mb-3 border-0 menu_item_1"
        style={{ maxWidth: "600px" }}
      >
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="menu-images/espresso.jpg"
              className="img-fluid rounded-start menu-image"
              alt="..."
            />
          </div>
          <div className="col-md-6 px-2 py-1">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <h5 className="card-title">Single Shot Espresso</h5>
              <p>Rp 25.000</p>
              <a className="btn btn-outline-dark fw-bold text-brown w-70 fs-6 liveToastBtn">
                <i className="bi bi-plus-circle"></i> Pesan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;