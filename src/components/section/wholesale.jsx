import { Link } from "react-router-dom";
import wholeSaleImg from "../../assets/img/whole-sale.png";
import Button from "../button/button";

function Wholesale() {
  return (
    <div className="flex items-center mt-12 p-8">
      <div>
        <h2 className="font-semibold">FOR WHOLESALERS</h2>

        <p className="text-sm my-4">
          We offer loose tea leaves of the best quality for your business. With
          a choice of more than 450 different kinds of loose tea, we can make a
          sophisticated selection that fits exactly in your kind of
          establishment.
        </p>
        <Link to="/contact">
          <Button type="primary" name="GET A FREE CONSULTATION" />
        </Link>
      </div>
      <div>
        <img src={wholeSaleImg} alt="img" />
      </div>
    </div>
  );
}

export default Wholesale;
