import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ProductData } from "./collection/productData";
import Button from "../components/button/button";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

function ProductInfo() {
  const { id } = useParams();
  // Navigation hook
  const navigate = useNavigate();

  // Fetch product based on the id from URL params
  const product = ProductData.find((item) => item.id === parseInt(id));

  // State to manage selected variant
  const [selectedVariant, setSelectedVariant] = useState(
    product ? product.variants[0] : null
  );

  // Function to handle variant selection
  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
  };

  // Function to handle adding to bag
  const handleAddToBag = () => {
    if (selectedVariant) {
      // Retrieve the cart from local storage or initialize as an empty array
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if the item already exists in the cart
      const itemIndex = existingCart.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedVariant.id === selectedVariant.id
      );

      if (itemIndex !== -1) {
        // If item exists, update the quantity
        existingCart[itemIndex].quantity =
          (existingCart[itemIndex].quantity || 1) + 1;
      } else {
        // Otherwise, add the new item to the cart
        existingCart.push({ ...product, selectedVariant, quantity: 1 });
      }

      // Update the cart state and local storage
      localStorage.setItem("cart", JSON.stringify(existingCart));

      console.log("Added to bag:", selectedVariant);

      // Navigate to cart page
      navigate("/cart");
    }
  };

  // Ensure product is found before rendering
  if (!product) {
    return <div>Product not found</div>;
  }

  // Filter related products excluding the current product
  const relatedProducts = ProductData.filter(
    (item) => item.id !== parseInt(id)
  ).slice(0, 3);

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center gap-20 mt-10">
        {/* Product details */}
        <div className="flex items-center gap-20 mt-4">
          <img src={product.image} alt="Product" />
          <div className="font-semibold text-lg">
            <h2>
              {product.name} {product.lastName}
            </h2>

            <p>
              {product.currency} {selectedVariant.price.toFixed(2)}
            </p>
            {/* Bag images section */}
            <div className="flex gap-4 my-6">
              {product.variants.map((variant) => (
                <img
                  key={variant.id}
                  src={variant.image}
                  alt={`Bag ${variant.weight}`}
                  className={`cursor-pointer ${
                    selectedVariant.id === variant.id
                      ? "border-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleVariantSelect(variant)}
                />
              ))}
            </div>
            <Button type="primary" name="Add to Bag" onClick={handleAddToBag} />
          </div>
        </div>

        {/* Related products */}
        <div className="mt-6">
          <h3 className="mb-3 text-lg font-bold text-center">
            You May Also Like
          </h3>
          <div className="flex space-x-4">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/collection/productinfo/${item.id}`}
                className="flex flex-col items-center hover:underline"
              >
                <img src={item.image} alt={item.name} />
                <p className="text-sm">{item.name}</p>
                <p>
                  {item.currency} {item.variants[0].price.toFixed(2)}
                </p>
                <p>{item.variants[0].weight}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductInfo;
