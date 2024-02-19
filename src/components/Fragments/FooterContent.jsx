const FooterContent = () => {
  return (
    <div className="container-fluid my-5">
      <div className="container-lg">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <h1
              className="fs-1 fw-semibold d-block d-flex align-items-center "
              href="#"
              data-aos="fade-down"
            >
              <img
                src="Logo/Logo-transparent-2.png"
                alt="logo"
                style={{ height: "65px" }}
              />
              <span className="me-2 fw-bold text-brown">iminum </span>Caffe
            </h1>
            <p className="lead fw-semibold " data-aos="fade-up">
              Minum dan rasakan kenikmatannya!
            </p>
            <div className="row mt-5 fw-bold">
              <div className="col-4 " data-aos="flip-left" data-aos-delay="500">
                <h2 className="text-brown fw-bold">25</h2>
                <p>Variant Menu</p>
              </div>
              <div
                className="col-4 "
                data-aos="flip-left"
                data-aos-delay="1000"
              >
                <h2 className="text-brown fw-bold">15</h2>
                <p>Outlet</p>
              </div>
              <div
                className="col-4 "
                data-aos="flip-left"
                data-aos-delay="1500"
              >
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
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
