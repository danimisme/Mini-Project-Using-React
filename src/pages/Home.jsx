import CardSection from "../components/CardSection";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <CardSection />
      <Content
        title="Rasa Kopi yang Memukau"
        imageUrl="images/barista-making-coffe-diminum-crop.jpeg"
        description="Dengan keahlian yang memukau, sang barista melukis karya seni kopi
              di setiap gerakan tangan. Aromanya menggoda, sepertinya kafein dan
              kreativitas menyatu dalam setiap tegukan yang diciptakannya."
      />
      <Footer />
    </>
  );
};

export default Home;
