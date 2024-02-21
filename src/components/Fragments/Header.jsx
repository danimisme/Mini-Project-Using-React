import "animate.css/animate.css";

const Header = ({ title, imageUrl, caption }) => {
  return (
    <header>
      <div className="container-fluid my-5 header-container">
        <div className="container">
          <div className="row d-flex align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 text-end  ">
              <h1 className="fw-bold title_header animate__animated animate__fadeInLeft">
                {title}
              </h1>
              <blockquote className="fs-3 caption_header animate__animated animate__fadeInUp">
                &quot; {caption} &quot;
              </blockquote>
            </div>
            <div className="col-md-4">
              <img
                src={imageUrl}
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
