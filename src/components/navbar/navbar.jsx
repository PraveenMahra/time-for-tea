import { FaSearch, FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const classLi = "hover:underline";

function Navbar() {
  return (
    <header className="flex justify-between items-center p-10">
      <Link to="/" className="font-semibold text-2xl">
        Time for Tea
      </Link>

      <nav>
        <ul className="flex gap-8 text-sm">
          <li className={classLi}>
            <Link to="/collection">TEA COLLECTIONS</Link>
          </li>

          <li className={classLi}>
            <Link to="/accessories">ACCESSORIES </Link>
          </li>

          <li className={classLi}>
            <Link to="/blog">BLOG </Link>
          </li>

          <li className={classLi}>
            <Link to="/contact">CONTACT US </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-8 cursor-pointer">
        <Link to="/search">
          <FaSearch />
        </Link>

        <Link to="/user">
          <FaUser />
        </Link>

        <Link to="/cart">
          <FaBagShopping />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
