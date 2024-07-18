import { FaCoffee, FaGift, FaShippingFast, FaTag } from "react-icons/fa";
import Button from "../button/button";

function Features() {
  const list = [
    {
      icon: <FaCoffee />,
      text: " 450+ KIND OF LOOSEF TEA",
    },
    {
      icon: <FaGift />,
      text: "CERTIFICATED ORGANIC TEAS",
    },
    {
      icon: <FaShippingFast />,
      text: " FREE DELIVERY",
    },
    {
      icon: <FaTag />,
      text: "SAMPLE FOR ALL TEAS",
    },
  ];

  return (
    <div className="bg-[#f4f4f4] mt-10 p-10">
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row  justify-center items-center gap-8">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-center hover:underline cursor-pointer"
          >
            {item.icon}
            <a href="#" className="text-sm">
              {item.text}
            </a>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button type="primary" name="learn more" />
      </div>
    </div>
  );
}

export default Features;
