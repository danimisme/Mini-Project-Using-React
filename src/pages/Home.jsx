import CardSection from "../components/CardSection";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import FooterContent from "../components/FooterContent";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [spesialMenu, setSpesialMenu] = useState([]);
  const getSpecialMenu = async () => {
    try {
      const response = await axios.get("./src/data/specialMenu.JSON");
      setSpesialMenu(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSpecialMenu();
  }, []);

  return (
    <>
      <Navbar active="Beranda" />
      <Carousel />
      <CardSection title="Spesial untuk anda" data={spesialMenu} />
      <Content
        title="Rasa Kopi yang Memukau"
        imageUrl="images/barista-making-coffe-diminum-crop.jpeg"
        description="Dengan keahlian yang memukau, sang barista melukis karya seni kopi
              di setiap gerakan tangan. Aromanya menggoda, sepertinya kafein dan
              kreativitas menyatu dalam setiap tegukan yang diciptakannya."
      />
      <FooterContent />
      <Footer />
    </>
  );
};

export default Home;
