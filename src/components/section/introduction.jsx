import { Link } from "react-router-dom";
import landingImg from "../../assets/img/Landing Main Image.png";
import Button from "../button/button";

function Introduction() {
  return (
    <div className="flex flex-col sm:flex-row items-center  gap-20">
      <div className="lg:w-[500px]">
        <img src={landingImg} alt="img" />
      </div>
      <div className="lg:w-[700px] sm:w-[500px] sm:text-left sm:px-0 text-center px-2">
        <h2 className="font-semibold sm:text-xl text-lg">
          Every day is unique, just like our tea
        </h2>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
          adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit amet
          consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh
          eros in.
        </p>

        <Link to="collection">
          <Button type="primary" name="browse more" />
        </Link>
      </div>
    </div>
  );
}

export default Introduction;
