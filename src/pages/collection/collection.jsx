import Navbar from "../../components/navbar/navbar";
import coverImg from "../../assets/img/cover-img.png";
import ProductFilters from "./producrFilter";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

function Collection() {
  return (
    <div>
      <Navbar />

      <div className="mb-6">
        <img src={coverImg} className="min-w-full" alt="img" />
      </div>
      <Link to="/" className="text-sm font-semibold text-[#282828] ml-6">
        HOME/COLLECTION/CHAI
      </Link>

      <ProductFilters />
      <Footer />
    </div>
  );
}

export default Collection;
