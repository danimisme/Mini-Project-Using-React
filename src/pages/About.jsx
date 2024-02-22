import Header from "../components/Fragments/Header";
import Navbar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import Content from "../components/Fragments/Content";
import { useEffect } from "react";
import BreadCrumb from "../components/Elements/BreadCrumb";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar active="Tentang Kami" />
      <Header
        title="Bukan sekedar kopi"
        imageUrl="images/bw-vector-image.jpg"
        caption=" Melainkan sebuah karya seni yang memukau, nuansa yang
                hangat, dan momen-momen tak terlupakan di setiap sajian kami.
                "
      />
      <BreadCrumb current="Tentang Kami" />
      <Content
        variant="content-right"
        title="Tentang Diminum Cafe"
        imageUrl="images/barista-making-coffe-crop.jpeg"
        description="Diminum Caffe didirikan pada awal tahun 2020. Berawal dari sebuah perjalanan dari perkebunan kopi di tanah air Indonesia yang subur melintasi bukit-bukit hijau, ke tepian sungai-sungai yang berliku, di mana biji kopi Indonesia ditemukan dan dimuliakan."
        secondDescription="Diminum Caffe menjadi ungkapan penuh kebanggaan atas keindahan kopi asli Indonesia. Dari dataran tinggi Gayo di Aceh hingga ketinggian Lintong di Sumatera Utara, setiap tegukan membawa cerita panjang tentang tanah yang subur dan iklim yang ideal."
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
