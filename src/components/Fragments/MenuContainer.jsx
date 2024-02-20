import { useEffect, useState } from "react";
import CardMenu from "../Elements/CardMenu";
import { getMenuItem } from "../../services/getData";
import Animation from "../../../aos";

const MenuContainer = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState({
    espersso: true,
    latte: true,
    donut: true,
  });

  useEffect(() => {
    getMenuItem((data) => setMenu(data));
    Animation();
  }, []);

  useEffect(() => {
    const filtered = menu.filter((item) => {
      if (checkboxValues.espersso && item.category === "espresso") {
        return true;
      }
      if (checkboxValues.latte && item.category === "latte") {
        return true;
      }
      if (checkboxValues.donut && item.category === "donut") {
        return true;
      }
      // ... tambahkan kondisi untuk checkbox lainnya sesuai kebutuhan
      return false;
    });
    setFilteredMenu(filtered);
  }, [checkboxValues, menu]);

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [checkboxName]: !prevValues[checkboxName],
    }));
  };

  console.log(filteredMenu);
  return (
    <div className="container-lg mt-3 mb-5">
      <h1 className="mb-5 menu_title_1">
        <span className="border-brown">Spesial </span> Untuk Kamu
      </h1>
      {/* Checkbox */}
      <div className="form-check form-switch fs-2">
        <input
          className="form-check-input "
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={checkboxValues.espersso}
          onChange={() => handleCheckboxChange("espersso")}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Espresso
        </label>
      </div>
      <div className="form-check form-switch fs-2">
        <input
          className="form-check-input "
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={checkboxValues.latte}
          onChange={() => handleCheckboxChange("latte")}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          Latte
        </label>
      </div>
      <div className="form-check form-switch fs-2">
        <input
          className="form-check-input "
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={checkboxValues.donut}
          onChange={() => handleCheckboxChange("donut")}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          Donut
        </label>
      </div>
      <div className="row justify-content-start">
        {filteredMenu.map((item, i) => (
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
