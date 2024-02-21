import Modals from "../components/Elements/Modals";
import Navbar from "../components/Fragments/Navbar";
import Header from "../components/Fragments/Header";
import BreadCrumb from "../components/Elements/BreadCrumb";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Navbar />
      <Header
        variant="header-right"
        title="Kepuasan Anda Adalah Segalanya!"
        caption="Kami mengutamakan kenyamanan pelanggan. Rasakan pengalaman kopi
      yang menyenangkan."
        imageUrl="images/barista-vector.jpg"
      />
      <BreadCrumb current="Kontak Kami" />
      <Modals />
    </>
  );
};

export default Contact;
