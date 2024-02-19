import "animate.css/animate.css";

const Header = () => {
  return (
    <header>
      <div className="container-fluid my-5 header-container">
        <div className="container">
          <div className="row d-flex align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 text-end  ">
              <h1 className="fw-bold title_header animate__animated animate__fadeInLeft">
                Bukan sekedar kopi
              </h1>
              <blockquote className="fs-3 caption_header animate__animated animate__fadeInUp">
                &quot; Melainkan sebuah karya seni yang memukau, nuansa yang
                hangat, dan momen-momen tak terlupakan di setiap sajian kami.
                &quot;
              </blockquote>
            </div>
            <div className="col-md-4">
              <img
                src="images/bw-vector-image.jpg"
                alt="diminum caffe"
                className="img-fluid mx-3 image_header animate__animated animate__fadeInRight"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
