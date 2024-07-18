import post1 from "..//../assets/img/post1.png";
import post2 from "..//../assets/img/post2.png";
import Button from "../button/button";

function Blog() {
  const list = [
    {
      img: post1,
      heading: "HOW TO STEEP TEA LIKE A PRO",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Indictum non consectetur a erat nam at. Risus nec feugiat infermentum posuere urna nec tincidunt praesent",
    },
    {
      img: post2,
      heading: "ALL ABOUT TEA AROMAS",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Indictum non consectetur a erat nam at. Risus nec feugiat infermentum posuere urna nec tincidunt praesent",
    },
  ];
  return (
    <div className="mt-10 bg-[#f4f4f4] p-10">
      <div className="">
        <h2 className="text-center mb-8 text-xl font-semibold">
          Last Blog Posts
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          {list.map((item, index) => (
            <div key={index} className="flex flex-col xl:flex-row gap-4">
              <img src={item.img} alt="img" />
              <div>
                <h2 className="font-semibold text-sm mb-2">{item.heading}</h2>
                <p className="my-8">{item.para}</p>
                <Button type="secondary" name="read more" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
