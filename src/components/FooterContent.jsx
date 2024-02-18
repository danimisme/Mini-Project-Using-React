const FooterContent = () => {
  return (
    <div className="container-fluid my-5">
      <div className="container-lg">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <h1
              className="fs-1 fw-semibold d-block d-flex align-items-center title_content_2"
              href="#"
            >
              <img
                src="Logo/Logo-transparent-2.png"
                alt="logo"
                style={{ height: "65px" }}
              />
              <span className="me-2 fw-bold text-brown">iminum </span>Caffe
            </h1>
            <p className="lead fw-semibold article_content_2">
              Minum dan rasakan kenikmatannya!
            </p>
            <div className="row mt-5 fw-bold info_list_container">
              <div className="col-4 info_list">
                <h2 className="text-brown fw-bold">25</h2>
                <p>Variant Menu</p>
              </div>
              <div className="col-4 info_list">
                <h2 className="text-brown fw-bold">15</h2>
                <p>Outlet</p>
              </div>
              <div className="col-4 info_list">
                <h2 className="text-brown fw-bold">10</h2>
                <p>Kota</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <img
              src="images/diminum.png"
              alt="barista-holding-glass"
              className="img-fluid rounded-3 image_content_2 p-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
