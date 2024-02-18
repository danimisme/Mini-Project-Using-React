import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CardSection = () => {
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
    <div className="container-lg mt-lg-5 mb-lg-5 my-3 text-center text-lg-start">
      <h1 className="mb-3 card_title fw-semibold">
        <span className="text-brown">Spesial</span> untuk anda
      </h1>
      <div className="row lg mt-lg-3 mt-1 justify-content-around card_list_container">
        <div className="col-lg-4 col-sm-8 col-md-6 col-8 my-3">
          {/* <!-- card --> */}
          <div
            className="card align-items-center border-0 mx-auto card_list"
            data-aos="fade-up"
          >
            <div className="row g-0">
              <div className="col-lg-4 col-md-10">
                <img
                  src="images/cup-of-coffe.jpeg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
              </div>
              <div className="col-lg-8 col-md-10">
                <div className="card-body">
                  <h5 className="card-title">Pesona Espresso</h5>
                  <p className="card-text">
                    Seperti seni dalam setiap shot espresso.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end of card --> */}
        </div>
        <div className="col-lg-4 col-sm-8 col-md-6 col-8 my-3">
          {/* <!-- card --> */}
          <div
            className="card align-items-center border-0 mx-auto card_list"
            data-aos="fade-up"
          >
            <div className="row g-0">
              <div className="col-lg-4 col-md-10">
                <img
                  src="images/latte.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
              </div>
              <div className="col-lg-8 col-md-10">
                <div className="card-body">
                  <h5 className="card-title">Soft Latte</h5>
                  <p className="card-text">
                    Latte, kelembutan dalam setiap tegukan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end of card --> */}
        </div>
        <div className="col-lg-4 col-sm-8 col-md-6 col-8 my-3">
          {/* <!-- card --> */}
          <div
            className="card align-items-center border-0 mx-auto card_list"
            data-aos="fade-up"
          >
            <div className="row g-0">
              <div className="col-lg-4 col-md-10">
                <img
                  src="images/donuts.jpg"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
              </div>
              <div className="col-lg-8 col-md-10">
                <div className="card-body">
                  <h5 className="card-title">Cita Rasa Donat</h5>
                  <p className="card-text">
                    Warna dan rasa berpadu dalam harmoni.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end of card --> */}
        </div>
      </div>
      <div className="d-flex justify-content-lg-end justify-content-center">
        <a href="menu.html" className="btn btn-dark mt-3 fs-5 button_menu">
          Lihat Menu <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default CardSection;
