import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Button from "../components/button/button";

function Success() {
  const location = useLocation();
  const { orderData, formattedDeliveryDate } = location.state;

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center gap-6">
        <h2 className="font-semibold text-xl">Order Successful!</h2>
        <p className="font-semibold">
          Estimated Delivery Date: {formattedDeliveryDate}
        </p>
        <div>
          {orderData.map((item) => (
            <div
              key={item.id + item.selectedVariant.id}
              className="flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover m-2"
              />
              <p>
                {item.name} - {item.selectedVariant.weight} - Quantity:
                {item.quantity}
              </p>
            </div>
          ))}
        </div>

        <Link to="/">
          <Button type="primary" name="Continue Shopping" />
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Success;
