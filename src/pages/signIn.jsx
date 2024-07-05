import { useState } from "react";
import emailSvg from "../assets/icons/email.svg";
import passwordSvg from "../assets/icons/password.svg";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/button/button";

const SignInForm = () => {
  const formDiv = "flex gap-5 bg-[#fff] border border-[#282828] my-6 px-2";
  const input = "p-2 outline-none";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, rememberMe } = formData;

    // Simulate authentication (replace with actual API call or authentication logic)
    const USER = {
      name: "Ram",
      email: "ram@gmail.com",
      password: "1aA!1111",
    };

    if (email !== USER.email || password !== USER.password) {
      alert("Invalid email or password");
      return;
    }

    // Remember user if checked
    if (rememberMe) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify(USER));
    } else {
      sessionStorage.setItem("isLoggedIn", true);
      sessionStorage.setItem("user", JSON.stringify(USER));
    }

    // Redirect or navigate to another page upon successful sign-in
    window.location.href = "/";
  };

  return (
    <section className="flex justify-center my-8 gap-10">
      <div className="bg-[#f4f4f4] p-12">
        <h2 className="text-xl mb-5 font-medium">Already a customer?</h2>
        <p>Welcome back! Sign in for faster checkout.</p>

        <form onSubmit={handleSubmit} id="form-sign-in">
          <div className={formDiv}>
            <img src={emailSvg} alt="icon" />
            <input
              className={input}
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={formDiv}>
            <img src={passwordSvg} alt="icon" />
            <input
              className={input}
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-between text-sm">
            <div className="flex gap-2 mb-5">
              <input
                className="cursor-pointer"
                type="checkbox"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label className="cursor-pointer" htmlFor="rememberMe">
                Please remember me
              </label>
            </div>

            <Link to="/"> Forget password? </Link>
          </div>

          <Button className="w-full" type="primary" name="SIGN IN" />
        </form>
      </div>

      <div>
        <div className="bg-[#f4f4f4] p-12">
          <h2 className="font-medium text-xl mb-5">New to our company?</h2>
          <p className="mb-4">Create an account for the best experience</p>
          <div className="flex items-center gap-4 my-4">
            <FaAngleRight />
            <p>Modify and track your orders</p>
          </div>
          <div className="flex items-center gap-4 my-4">
            <FaAngleRight />
            <p>Faster checkout</p>
          </div>
          <div className="flex items-center gap-4 my-4">
            <FaAngleRight />
            <p>Get a 10% discount for new customer</p>
          </div>

          <Link to="/createAccount">
            <Button
              className="w-full border border-[black] p-3"
              name="CREATE AN ACCOUNT"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignInForm;
