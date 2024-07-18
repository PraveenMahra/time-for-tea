import { Link } from "react-router-dom";
import { ProductData } from "./productData";

function ProductList() {
  return (
    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center text-center">
      {ProductData.map((item) => (
        <Link
          key={item.id}
          to={`/collection/productinfo/${item.id}`}
          className="hover:underline cursor-pointer"
        >
          <div className="overflow-hidden">
            <img
              className="transition-all duration-300 hover:scale-110"
              src={item.image}
              alt="Product"
            />
          </div>
          <p className="text-sm mt-1 capitalize">{item.name}</p>
          <p className="text-sm mt-1 capitalize">{item.description}</p>
          <p className="text-sm mt-1 capitalize">
            {item.currency} {item.variants[0].price.toFixed(2)} /{" "}
            {item.variants[0].weight}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
