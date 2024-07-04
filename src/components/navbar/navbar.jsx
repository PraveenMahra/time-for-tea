import { FaSearch, FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const styleLi = "cursor-pointer hover:underline";

function Navbar() {
  return (
    <header className="flex justify-between items-center p-10">
      <Link to="/">
        <h2 className="font-semibold text-2xl cursor-pointer">Time for Tea</h2>
      </Link>

      <nav>
        <ul className="flex gap-8 text-sm">
          <Link to="/collection">
            <li className={styleLi}>TEA COLLECTIONS</li>
          </Link>
          <Link to="/accessories">
            <li className={styleLi}>ACCESSORIES</li>
          </Link>
          <Link to="/blog">
            <li className={styleLi}>BLOG</li>
          </Link>
          <Link to="/contact">
            <li className={styleLi}>CONTACT US</li>
          </Link>
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
