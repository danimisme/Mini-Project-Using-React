import CardMenu from "../Elements/CardMenu";

const MenuContainer = (props) => {
  return (
    <div className="container-lg mt-3 mb-5">
      <h1 className="mb-5 menu_title_1">
        <span className="border-brown">Pesona</span>
        Espresso
      </h1>
      <div className="row justify-content-start">
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
        <CardMenu />
      </div>
    </div>
  );
};

export default MenuContainer;
