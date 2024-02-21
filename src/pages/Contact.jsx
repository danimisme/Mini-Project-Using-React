import Modals from "../components/Elements/Modals";
import Navbar from "../components/Fragments/Navbar";
import Header from "../components/Fragments/Header";

const Contact = () => {
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
      <Modals />
    </>
  );
};

export default Contact;
