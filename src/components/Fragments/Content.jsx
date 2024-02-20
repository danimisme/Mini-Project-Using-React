import AOS from "aos";
import "aos/dist/aos.css";
import Animation from "../../../aos";
import { useEffect } from "react";

const Content = ({
  variant,
  title,
  imageUrl,
  description,
  secondDescription = "",
  background = true,
}) => {
  useEffect(() => {
    Animation();
  }, []);

  return (
    <div className={`container-fluid my-5 ${background ? "bg-image" : ""}`}>
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
          <div
            className={`col-lg-5 lh-lg my-5 ${
              variant === "content-left" ? "text-end" : ""
            }`}
          >
            <h1
              className="mb-5 fw-semibold "
              data-aos={
                variant === "content-right" ? "fade-left" : "fade-right"
              }
            >
              {title}
            </h1>
            <p className="lead fs-4 " data-aos="fade-up">
              {description}
            </p>
            <p className="lead fs-4 " data-aos="fade-up">
              {secondDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
