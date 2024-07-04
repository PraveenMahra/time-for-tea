import Button from "../button/button";

function Features() {
  const list = [
    {
      icon: "fa-solid fa-mug-saucer",
      text: " 450+ KIND OF LOOSEF TEA",
    },
    {
      icon: "fa-solid fa-gift",
      text: "CERTIFICATED ORGANIC TEAS",
    },
    {
      icon: "fa-solid fa-truck",
      text: " FREE DELIVERY",
    },
    {
      icon: "fa-solid fa-tag",
      text: "SAMPLE FOR ALL TEAS",
    },
  ];

  return (
    <div className="bg-[#f4f4f4] mt-10 p-10">
      <div className="flex justify-center items-center gap-8">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-center hover:underline cursor-pointer"
          >
            <i className={item.icon}></i>
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
