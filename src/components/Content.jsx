const Content = ({ key, title, imageUrl, description }) => {
  return (
    <div className="container-fluid my-5 bg-light bg-image" key={key}>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 my-5">
            <img
              src={imageUrl}
              alt="barista-making-coffe-diminum"
              className="img-fluid rounded image_content_1"
            />
          </div>
          <div className="col-lg-5 offset-lg-1 lh-lg my-5">
            <h1 className="mb-5 fw-semibold title_content_1">{title}</h1>
            <p className="lead fs-4 article_content_1">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
