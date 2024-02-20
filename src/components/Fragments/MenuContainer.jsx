import { useEffect, useState } from "react";
import CardMenu from "../Elements/CardMenu";
import { getMenuItem } from "../../services/getData";

const MenuContainer = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenuItem((data) => setMenu(data));
  }, []);

  console.log(menu);
  return (
    <div className="container-lg mt-3 mb-5">
      <h1 className="mb-5 menu_title_1">
        <span className="border-brown">Spesial </span> Untuk Kamu
      </h1>
      <div className="row justify-content-start">
        {menu.map((item) => (
          <CardMenu
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
