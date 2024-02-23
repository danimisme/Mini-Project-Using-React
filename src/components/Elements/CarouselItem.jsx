const CarouselItem = ({ imageUrl, title, caption, index }) => {
  return (
    <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
      <img src={imageUrl} className="d-block w-100" alt="..." />

      <div className="carousel-caption d-none d-md-block h-50">
        <h2
          className="fw-bold header_title animate__animated animate__bounceInLeft"
          data-aos="fade-right"
        >
          {title}
        </h2>
        <p
          className="lead header_caption fs-3 animate__animated animate__bounceInRight"
          data-aos="fade-left"
        >
          &quot; {caption} &quot;
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
