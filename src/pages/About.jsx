import Header from "../components/Fragments/Header";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import Content from "../components/Fragments/Content";

const About = () => {
  return (
    <>
      <Navbar active="Tentang Kami" />
      <Header />
      <Content
        variant="content-right"
        title="Tentang Diminum Cafe"
        imageUrl="images/barista-making-coffe-crop.jpeg"
        description="Diminum Caffe didirikan pada awal tahun 2020. Berawal dari sebuah perjalanan dari perkebunan kopi di tanah air Indonesia yang subur melintasi bukit-bukit hijau, ke tepian sungai-sungai yang berliku, di mana biji kopi Indonesia ditemukan dan dimuliakan."
      />
      <Content
        variant="content-left"
        background={false}
        title="Bahan Yang Berkualitas"
        imageUrl="images/coffe-beans.jpg"
        description="Kami selalu menjamin bahan-bahan yang kami gunakan adalah bahan yang berkualitas. Dengan memahami pentingnya bahan-bahan berkualitas,kami berkomitmen untuk menyajikan kopi terbaik Indonesia kepada para pecinta kopi. Setiap gelas yang diminum tidak hanya sebuah minuman, tetapi juga pengalaman sensorial yang membangkitkan semua indra."
      />

      <Footer />
    </>
  );
};

export default About;
