import CardSection from "../components/Fragments/CardSection";
import Header from "../components/Fragments/Header";
import Navbar from "../components/Fragments/Navbar";
import { getOrderMethod } from "../services/getData";
import { useEffect, useState } from "react";
const Menu = () => {
  const [orderMethod, setOrderMethod] = useState([]);

  useEffect(() => {
    getOrderMethod((data) => setOrderMethod(data));
  });

  return (
    <>
      <Navbar />
      <Header
        title={`Pusing ? \n Diminum dulu Kopinya !`}
        imageUrl="images/line-art.jpeg"
        caption="Dibuat dari Biji Kopi Pilihan Biji Kopi Fresh Dipanggang dan Digiling Langsung"
      />
      <CardSection title="Spesial untuk anda" data={orderMethod} />
    </>
  );
};

export default Menu;
