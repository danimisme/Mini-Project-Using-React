import { useEffect, useState } from "react";
import CardMenu from "../Elements/CardMenu";
import { getMenuItem } from "../../services/getData";
import Animation from "../../../aos";
import Checkbox from "../Elements/CheckBox";

const MenuContainer = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState({
    espresso: true,
    latte: true,
    donut: true,
  });

  useEffect(() => {
    getMenuItem((data) => setMenu(data));
    Animation();
  }, []);

  useEffect(() => {
    const filtered = menu.filter((item) => {
      if (checkboxValues.espresso && item.category === "espresso") {
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

  return (
    <div className="container-lg mt-3 mb-5">
      <h1 className="mb-3">
        <span className="border-brown">Spesial</span> Untuk Kamu
      </h1>

      <div className="checkbox-container">
        <Checkbox
          name="espresso"
          label="Espresso"
          handleCheckboxChange={handleCheckboxChange}
          checkboxValues={checkboxValues}
        />
        <Checkbox
          name="latte"
          label="Latte"
          handleCheckboxChange={handleCheckboxChange}
          checkboxValues={checkboxValues}
        />
        <Checkbox
          name="donut"
          label="Donut"
          handleCheckboxChange={handleCheckboxChange}
          checkboxValues={checkboxValues}
        />
      </div>

      <div className="row justify-content-start mt-5">
        {/* {filteredMenu.length !== 0 ? (
          <h3 className="lead mb-3">
            Wah ada {filteredMenu.length} menu yang cocok nih !
          </h3>
        ) : (
          <h3 className="lead">Maaf sepertinya belum ada menu yang cocok :(</h3>
        )} */}

        <p
          className="lead mb-3 fw-semibold"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {filteredMenu.length !== 0
            ? "Wah ada " + filteredMenu.length + " menu yang cocok nih !"
            : "Maaf sepertinya belum ada menu yang cocok :("}
        </p>
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
