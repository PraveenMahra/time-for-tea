import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import SignInForm from "./signIn";

const User = function () {
  return (
    <>
      <Navbar />
      <SignInForm />
      <Footer />
    </>
  );
};

export default User;
