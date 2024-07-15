import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/button";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

function Cart() {
  // Retrieve the cart state from local storage or initialize as an empty array
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  // Update local storage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to remove an item from the cart
  const handleRemoveFromCart = (productId, variantId) => {
    const updatedCart = cart.filter(
      (item) =>
        !(item.id === productId && item.selectedVariant.id === variantId)
    );
    setCart(updatedCart);
  };

  // Function to update the quantity of a product
  const handleQuantityChange = (productId, variantId, quantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.selectedVariant.id === variantId) {
        return { ...item, quantity: parseInt(quantity, 10) };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to calculate the total price of the cart
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) =>
        total + item.selectedVariant.price * (item.quantity || 1),
      0
    );
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center gap-10 mt-10">
        <h1 className="text-2xl font-bold">Your Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="flex flex-col gap-6 w-full max-w-4xl">
              {cart.map((item) => (
                <div
                  key={item.id + item.selectedVariant.id}
                  className="flex items-center justify-between border-b py-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex flex-col flex-grow mx-4">
                    <Link
                      to={`/collection/productinfo/${item.id}`}
                      className="text-lg font-semibold hover:underline"
                    >
                      {item.name} {item.selectedVariant.weight}
                    </Link>
                    <p>
                      {item.currency} {item.selectedVariant.price.toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2">
                      <label
                        htmlFor={`quantity-${item.id}-${item.selectedVariant.id}`}
                        className="mr-2"
                      >
                        Quantity:
                      </label>
                      <input
                        type="number"
                        id={`quantity-${item.id}-${item.selectedVariant.id}`}
                        value={item.quantity || 1}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            item.selectedVariant.id,
                            e.target.value
                          )
                        }
                        className="border p-1 w-16"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleRemoveFromCart(item.id, item.selectedVariant.id)
                    }
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-lg font-bold">
                Total Price: {cart[0]?.currency}{" "}
                {calculateTotalPrice().toFixed(2)}
              </p>
              <Button
                type="primary"
                name="Proceed to Checkout"
                onClick={() => alert("Proceeding to checkout...")}
              />
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
