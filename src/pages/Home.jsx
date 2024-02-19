import CardSection from "../components/Fragments/CardSection";
import Carousel from "../components/Fragments/Carousel";
import Navbar from "../components/Fragments/Navbar";
import Content from "../components/Fragments/Content";
import Footer from "../components/Fragments/Footer";
import FooterContent from "../components/Fragments/FooterContent";
import { getSpecialMenu, getCarouselItems } from "../services/getData";
import { useEffect, useState } from "react";

const Home = () => {
  const [spesialMenu, setSpesialMenu] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    getSpecialMenu((data) => setSpesialMenu(data));
    getCarouselItems((data) => setCarouselItems(data));
  }, []);

  return (
    <>
      <Navbar active="Beranda" />
      <Carousel carouselItems={carouselItems} />
      <CardSection title="Spesial untuk anda" data={spesialMenu} />
      <Content
        variant="content-right"
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
