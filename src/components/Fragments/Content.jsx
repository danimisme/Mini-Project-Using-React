const Content = ({ variant, title, imageUrl, description }) => {
  return (
    <div className="container-fluid my-5 bg-light bg-image">
      <div className="container-lg ">
        <div className={`row justify-content-around ${variant}`}>
          <div className="col-lg-6 my-5">
            <img
              src={imageUrl}
              alt="barista-making-coffe-diminum"
              className="img-fluid rounded "
              data-aos="zoom-in"
            />
          </div>
          <div className="col-lg-5 lh-lg my-5">
            <h1 className="mb-5 fw-semibold " data-aos="fade-left">
              {title}
            </h1>
            <p className="lead fs-4 " data-aos="fade-up">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
