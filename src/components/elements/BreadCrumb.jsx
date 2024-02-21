import { Link } from "react-router-dom";

const BreadCrumb = ({ current }) => {
  return (
    <div className="container-lg px-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb fs-5 fw-semibold">
          <li className="breadcrumb-item">
            <Link to="/" className="link-underline-light text-brown">
              Beranda
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {current}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
