import Navbar from "../components/Fragments/Navbar";
import Header from "../components/Fragments/Header";
import BreadCrumb from "../components/Elements/BreadCrumb";
import { useEffect } from "react";
import Content from "../components/Fragments/Content";
import Form from "../components/Fragments/Form";
import Footer from "../components/Fragments/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar active="Kontak Kami" />
      <Header
        variant="header-right"
        title="Kepuasan Anda Adalah Segalanya!"
        caption="Kami mengutamakan kenyamanan pelanggan. Rasakan pengalaman kopi
      yang menyenangkan."
        imageUrl="images/barista-vector.jpg"
      />
      <BreadCrumb current="Kontak Kami" />
      <Content
        variant="content-right"
        title="Ada Yang Ingin Anda Sampaikan ?"
        imageUrl="images/barista-customer-crop.jpg"
        description="Tulis pesan anda untuk kami, kami akan mendengarkan dengan
      sepenuh hati. kami menerima segala bentuk saran dan kritik yang
      diberikan kepada kami. Karena bagi kami kualitas rasa dan
      kepuasan anda adalah tujuan dan alasan kami ada disini."
        background={false}
      />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
