import img1 from "../../assets/img/product-img1.png";
import img2 from "../../assets/img/product-img2.png";
import img3 from "../../assets/img/product-img3.png";
import img4 from "../../assets/img/product-img4.png";
import img5 from "../../assets/img/product-img5.png";
import img6 from "../../assets/img/product-img6.png";
import img7 from "../../assets/img/product-img7.png";
import img8 from "../../assets/img/product-img8.png";
import img9 from "../../assets/img/product-img9.png";

function ProductData() {
  const productData = [
    {
      id: 1,
      name: "Ceylon Ginger",
      lastName: "Cinnamon chai tea",
      currency: "$",
      rate: 4.8,
      weight: "50g",
      image: img1,
    },
    {
      id: 2,
      name: "Ceylon",
      lastName: "Cinnamon chai tea",
      currency: "$",
      rate: 5.8,
      weight: "50g",
      image: img2,
    },
    {
      id: 3,
      name: "Ceylon Ginger",
      lastName: "Cinnamon chai tea",
      currency: "$",
      rate: 4.8,
      weight: "50g",
      image: img3,
    },
    {
      id: 4,
      name: "Ceylon Ginger",
      lastName: "Cinnamon chai tea",
      currency: "$",
      rate: 4.8,
      weight: "50g",
      image: img4,
    },
    {
      id: 5,
      name: "Ceylon Ginger",
      lastName: "Cinnamon chai tea",
      currency: "$",
      rate: 4.8,
      weight: "50g",
      image: img5,
    },
    {
      id: 6,
      name: "Ceylon Ginger",
      lastName: "Cinnamon chai tea",
      currency: "$",
      rate: 4.8,
      weight: "50g",
      image: img6,
    },
    {
      id: 7,
      name: "Ceylon Ginger",
      lastName: "Cinnamon chai tea",
      currency: "$",
      rate: 4.8,
      weight: "50g",
      image: img7,
    },
    {
      id: 8,
      name: "Ceylon Ginger",
      lastName: "Cinnamon chai tea",
      currency: "$",
      rate: 4.8,
      weight: "50g",
      image: img8,
    },
    {
      id: 9,
      name: "Ceylon Ginger",
      lastName: "Cinnamon chai tea",
      currency: "$",
      rate: 4.8,
      weight: "50g",
      image: img9,
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-3 gap-5 place-items-center text-center">
      {productData.map((item, index) => (
        <div key={index} className="hover:underline cursor-pointer">
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
        </div>
      ))}
    </div>
  );
}

export default ProductData;
