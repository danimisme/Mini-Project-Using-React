import CardSection from "../components/Fragments/CardSection";
import Header from "../components/Fragments/Header";
import MenuContainer from "../components/Fragments/MenuContainer";
import Navbar from "../components/Fragments/Navbar";
import { getOrderMethod } from "../services/getData";
import { useEffect, useState } from "react";
import Footer from "../components/Fragments/Footer";
import Modals from "../components/Elements/Modals";
import BreadCrumb from "../components/Elements/BreadCrumb";
const Menu = () => {
  const [orderMethod, setOrderMethod] = useState([]);

  useEffect(() => {
    getOrderMethod((data) => setOrderMethod(data));
    window.scrollTo(0, 0);
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
      <BreadCrumb current="Menu" />
      <CardSection title="Yuk Order !" data={orderMethod} />
      <MenuContainer />
      <Modals />
      <Footer />
    </>
  );
};

export default Menu;
