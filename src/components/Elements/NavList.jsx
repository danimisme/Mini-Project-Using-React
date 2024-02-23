import { Link } from "react-router-dom";
const NavList = ({ link, text, active }) => {
  return (
    <li className="nav-item mx-3">
      <Link to={link} className={`nav-link ${active === text ? "on" : ""}`}>
        {text}
      </Link>
    </li>
  );
};

export default NavList;
