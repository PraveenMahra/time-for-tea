import { Link } from "react-router-dom";
import { ProductData } from "./productData";

function ProductList() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-5 place-items-center text-center">
      {ProductData.map((item, index) => (
        <Link
          key={index}
          to={`/collection/productinfo/${item.id}`}
          className="hover:underline cursor-pointer"
        >
          <div className="overflow-hidden">
            <img
              className="transition-all duration-300 hover:scale-110"
              src={item.image}
              alt="img"
            />
          </div>
          <p className="text-sm mt-1 capitalize">{item.name}</p>
          <p className="text-sm mt-1 capitalize">{item.lastName}</p>
          <p className="text-sm mt-1 capitalize">
            {item.currency + item.rate + "/" + item.weight}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
