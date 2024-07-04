import blackTea from "../../assets/img/black-tea.png";
import greenTea from "../../assets/img/gren-tea.png";
import whiteTea from "../../assets/img/white-tea.png";
import matcha from "../../assets/img/matcha.png";
import herbalTea from "../../assets/img/herbal.png";
import chai from "../../assets/img/chai.png";
import oolang from "../../assets/img/oolang.png";
import rooibos from "../../assets/img/rooibos.png";
import teawere from "../../assets/img/teawere.png";
import { Link } from "react-router-dom";

function Showcase() {
  const data = [
    {
      img: blackTea,
      name: "BLACK TEA",
    },
    {
      img: greenTea,
      name: "GREEN TEA",
    },
    {
      img: whiteTea,
      name: "WHITE TEA",
    },
    {
      img: matcha,
      name: "MATCHA",
    },
    {
      img: herbalTea,
      name: "HERBAL TEA",
    },
    {
      img: chai,
      name: "CHAI",
    },
    {
      img: oolang,
      name: "OOLANG",
    },
    {
      img: rooibos,
      name: "ROOIBOS",
    },
    {
      img: teawere,
      name: "TEAWERE",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-3 gap-5 place-items-center text-center">
      {data.map((item, index) => (
        <div key={index} className="hover:underline cursor-pointer">
          <Link to="/collection">
            <div className="overflow-hidden">
              <img
                className="w-[300px] transition-all duration-300 hover:scale-110"
                src={item.img}
                alt="img"
              />
            </div>
            <p className="text-sm mt-1 capitalize">{item.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Showcase;
