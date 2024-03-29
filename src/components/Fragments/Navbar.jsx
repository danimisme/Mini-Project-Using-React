import React, { useState } from "react";
import NavList from "../Elements/NavList";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
const Navbar = ({ active }) => {
  const [navStyle, setNavStyle] = useState("");

  const handleClick = () => {
    Swal.fire({
      title: "Maaf !",
      text: "Maaf Saat ini layanan order online dalam perbaikan. Mohon coba beberapa saat lagi. Terimakasih !",
      icon: "warning",
      confirmButtonText: "Tutup",
      confirmButtonColor: "#74351c",
    });
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100 && window.scrollY < 500) {
      setNavStyle("none");
    } else if (window.scrollY > 500) {
      setNavStyle("navbar-scrolled");
    } else if (window.scrollY < 100) {
      setNavStyle("");
    }
  });

  return (
    // <!-- Navbar -->
    <nav className={`navbar fixed-top navbar-expand-lg ${navStyle}`}>
      <div className="container-lg justify-content-between align-items-start">
        <a
          className="navbar-brand fw-semibold d-block d-flex align-items-center fs-3"
          href="#"
        >
          <img
            src="./Logo/Logo-transparent-2.png"
            alt="logo"
            style={{ height: "45px" }}
          />
          <span className="me-1 fw-bold text-brown">iminum </span>Caffe
        </a>

        <div className="align-items-end text-end">
          <button
            className="navbar-toggler my-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mt-2 fs-md-5">
              <NavList link="/" text="Beranda" active={active} />
              <NavList link="/about" text="Tentang Kami" active={active} />
              <NavList link="/menu" text="Menu" active={active} />
              <NavList link="/contact" text="Kontak Kami" active={active} />
              <li className="nav-item mx-3">
                <a className="btn" onClick={handleClick}>
                  <i className="bi bi-cart"></i> Order
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    // <!-- End of Navbar -->
  );
};

export default Navbar;
