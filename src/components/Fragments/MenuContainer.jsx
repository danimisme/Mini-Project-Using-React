import { useEffect, useState } from "react";
import CardMenu from "../Elements/CardMenu";
import { getMenuItem } from "../../services/getData";
import Animation from "../../../aos";

const MenuContainer = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenuItem((data) => setMenu(data));
    Animation();
  }, []);

  return (
    <div className="container-lg mt-3 mb-5">
      <h1 className="mb-5 menu_title_1">
        <span className="border-brown">Spesial </span> Untuk Kamu
      </h1>
      <div className="row justify-content-start">
        {menu.map((item, i) => (
          <CardMenu
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            duration={(i % 3) * 300}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
