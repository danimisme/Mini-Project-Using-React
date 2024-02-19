const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-dark text-light py-3">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-4 justify-content-center">
              <h4 className="">Hubungi Kami</h4>
              <ul className="">
                <li>
                  <i className="bi bi-whatsapp"></i> +62897-9761-661
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i> 021-623-023-95
                </li>
                <li>
                  <i className="bi bi-envelope-at"></i> diminumcaffe@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-lg-4 justify-content-center">
              <h4 className="">Outlet</h4>
              <div className="d-flex">
                <ul className="me-5">
                  <li>
                    <i className="bi bi-geo-alt-fill"></i> Jakarta
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill"></i> Bandung
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill"></i> Surabaya
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill"></i> Medan
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill"></i> Surakarta
                  </li>
                </ul>
                <ul className="">
                  <li>
                    <i className="bi bi-geo-alt-fill"></i> Yogyakarta
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill"></i> Depok
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill"></i> Bogor
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill"></i> Bekasi
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill"></i> Tangerang
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 justify-content-center">
              <h4 className="">Social Media</h4>
              <ul className="">
                <li>
                  <i className="bi bi-instagram"></i> @DiminumCaffe
                </li>
                <li>
                  <i className="bi bi-facebook"></i> Diminum Caffe
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center fw-bold">
            Copyright &copy; 2024 Diminum Caffe by Muhammad Subhan Ramdhani
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
