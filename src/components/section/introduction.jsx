import { Link } from "react-router-dom";
import landingImg from "../../assets/img/Landing Main Image.png";
import Button from "../button/button";

function Introduction() {
  return (
    <div className="flex items-center gap-20">
      <div className="w-[500px]">
        <img src={landingImg} alt="img" />
      </div>
      <div className="w-[700px]">
        <h2 className="font-semibold text-xl">
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
