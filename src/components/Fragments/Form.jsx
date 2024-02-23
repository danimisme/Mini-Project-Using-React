import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputForm from "../Elements/Input";
import Animation from "../../../aos";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    toast.success(`Halo ${name}, Terima Kasih Telah Menghubungi Kami`);
    console.log(event.target);
  };

  useEffect(() => {
    Animation();
  }, []);
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="container-lg my-5">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-10 mx-auto " data-aos="fade-up">
            <h1 className="fw-bold text-md-center">Hubungi Kami</h1>
            <form id="inputMessage" onSubmit={handleSubmit}>
              <InputForm
                label="Nama"
                name="name"
                type="text"
                placeholder="Masukkan Nama Kamu"
              />
              <InputForm
                label="Email"
                name="email"
                type="email"
                placeholder="Masukkan Email Kamu"
              />
              <InputForm
                label="Nomor Telepon"
                name="phoneNumber"
                type="number"
                placeholder="Masukkan Nomor Telepon Kamu"
              />
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Pesan
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Tulis Pesan Kamu ... "
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark px-4">
                Kirim <i className="bi bi-send"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
