const Card = ({ title, imageUrl, description, duration }) => {
  return (
    <div className="col-lg-4 col-sm-8 col-md-6 col-8 my-3">
      {/* <!-- card --> */}
      <div
        className="card align-items-center border-0 mx-auto card_list"
        data-aos="fade-up"
        data-aos-delay={duration}
      >
        <div className="row g-0">
          <div className="col-lg-4 col-md-10">
            <img
              src={imageUrl}
              className="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col-lg-8 col-md-10">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end of card --> */}
    </div>
  );
};

export default Card;
