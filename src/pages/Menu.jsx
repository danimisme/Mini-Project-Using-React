import CardSection from "../components/Fragments/CardSection";
import Header from "../components/Fragments/Header";
import MenuContainer from "../components/Fragments/MenuContainer";
import Navbar from "../components/Fragments/Navbar";
import { getOrderMethod } from "../services/getData";
import { useEffect, useState } from "react";
const Menu = () => {
  const [orderMethod, setOrderMethod] = useState([]);

  useEffect(() => {
    getOrderMethod((data) => setOrderMethod(data));
  }, []);

  return (
    <>
      <Navbar />
      <Header
        title="Pusing ? "
        subTitle="Diminum dulu Kopinya !"
        imageUrl="images/line-art.jpeg"
        caption="Dibuat dari Biji Kopi Pilihan Biji Kopi Fresh Dipanggang dan Digiling Langsung"
      />
      <CardSection title="Yuk Order !" data={orderMethod} />
      <MenuContainer />
    </>
  );
};

export default Menu;
