import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import { useEffect } from "react";

const Caousel = () => {
  function Animation() {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }

  useEffect(() => {
    Animation();
  }, []);

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
              <h2 className="fw-bold header_title" data-aos="fade-right">
                Bukan Sekedar Kopi
              </h2>
              <p className="lead header_caption fs-3" data-aos="fade-left">
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
