import "animate.css/animate.css";
import { useEffect } from "react";

const Caousel = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div
        id="carouselExampleCaptions"
        className="carousel slide border"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/bg-1.jpg" className="d-block w-100" alt="..." />

            <div className="carousel-caption d-none d-md-block h-50">
              <h2
                className="fw-bold header_title animate__animated animate__bounceInLeft"
                data-aos="fade-right"
              >
                Bukan Sekedar Kopi
              </h2>
              <p
                className="lead header_caption fs-3 animate__animated animate__bounceInRight"
                data-aos="fade-left"
              >
                Ini Pengalaman Kopi yang Luar Biasa. Temukan Keajaiban di Setiap
                Cangkir.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/bg-3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block h-50">
              <h2 className="fw-bold header_title">
                Dibuat dari Biji Kopi Pilihan
              </h2>
              <p className="lead header_caption fs-3">
                Dibuat dengan Teliti dari Biji Kopi Pilihan, Setiap Seruput
                Menyajikan Keindahan dan Kenikmatan yang Tak Terlupakan.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/bg-2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block h-50">
              <h2 className="fw-bold header_title">Secangkir Semangat</h2>
              <p className="lead header_caption fs-3">
                Bangkitkan Semangatmu dengan Kopi Terbaik. Sebuah Cangkir,
                Ribuan Sensasi.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Caousel;
