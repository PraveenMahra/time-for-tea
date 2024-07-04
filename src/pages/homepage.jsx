import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Blog from "../components/section/blog";
import Showcase from "../components/section/showcase";
import Features from "../components/section/features";
import Introduction from "../components/section/introduction";
import Wholesale from "../components/section/wholesale";

function Homepage() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Features />
      <Showcase />
      <Blog />
      <Wholesale />
      <Footer />
    </>
  );
}

export default Homepage;
