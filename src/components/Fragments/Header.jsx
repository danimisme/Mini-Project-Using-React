import "animate.css/animate.css";

const Header = ({ title, subTitle, imageUrl, caption, variant = "" }) => {
  return (
    <header>
      <div className="container-fluid my-5 header-container">
        <div className="container">
          <div
            className={`row d-flex align-items-center flex-column-reverse flex-md-row ${variant} `}
          >
            <div
              className={`col-md-6 ${
                variant === "header-right" ? "text-start" : "text-end"
              }`}
            >
              <h1
                className={`fw-bold title_header animate__animated  ${
                  variant === "header-right"
                    ? "animate__fadeInRight"
                    : "animate__fadeInLeft"
                }`}
              >
                {title} {subTitle && <div>{subTitle}</div>}
              </h1>
              <blockquote className="fs-3 caption_header animate__animated animate__fadeInUp">
                &quot; {caption} &quot;
              </blockquote>
            </div>
            <div className="col-md-4">
              <img
                src={imageUrl}
                alt="image header"
                className={`img-fluid mx-3 image_header animate__animated ${
                  variant === "header-right"
                    ? "animate__fadeInLeft"
                    : "animate__fadeInRight"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
