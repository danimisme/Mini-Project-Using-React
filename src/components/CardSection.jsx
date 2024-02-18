import Animation from "../../aos";
import { useEffect } from "react";
import Card from "./elements/Card";

const CardSection = ({ data, title }) => {
  useEffect(() => {
    Animation();
  }, []);

  return (
    <div className="container-lg mt-lg-5 mb-lg-5 my-3 text-center text-lg-start">
      <h1 className="mb-3 fw-semibold text-brown">{title}</h1>
      <div className="row lg mt-lg-3 mt-1 justify-content-around card_list_container">
        {data.map((item, i) => (
          <Card
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
            duration={i * 200}
          />
        ))}
      </div>
      <div className="d-flex justify-content-lg-end justify-content-center">
        <a
          href="menu.html"
          className="btn btn-dark mt-3 fs-5 button_menu"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          Lihat Menu <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default CardSection;
