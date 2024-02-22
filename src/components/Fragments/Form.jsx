import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    toast.success(`Halo ${name}, Terima Kasih Telah Menghubungi Kami`);
    console.log(event.target.name.value);
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="container-lg my-5">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-10 mx-auto title_content_3">
            <h1 className="fw-bold text-md-center">Hubungi Kami</h1>
            {/* <!-- Alert --> */}
            <div id="liveAlertPlaceholder"></div>
            {/* <!-- End of Alert --> */}
            <form id="inputMessage" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Masukkan Nama Kamu "
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Masukkan Email Kamu "
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Nomor Telepon
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Masukkan Nomor Telepon Kamu "
                />
              </div>
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
              <button type="submit" className="btn btn-dark px-5">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
