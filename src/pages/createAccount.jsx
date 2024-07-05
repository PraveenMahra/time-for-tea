import { useState } from "react";
import Button from "../components/button/button";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const CreateAccountForm = () => {
  const divFlex = "flex flex-col my-4";
  const input = "p-2 w-[350px] border";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    // Perform validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Please enter a valid password.\nPassword should contain one uppercase, one lowercase, one numeral, and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return;
    }

    // Handle account creation - you can perform API calls or other actions here
    alert("Account created successfully");
    // Redirect or navigate to another page
    window.location.href = "/";
  };

  return (
    <>
      <Navbar />

      <section className="flex justify-center mb-20">
        <form className="bg-[#f4f4f4] p-14" onSubmit={handleSubmit}>
          <h1 className="text-xl font-medium mb-4 text-center">
            Create Account
          </h1>
          <div className={divFlex}>
            <label htmlFor="name">Name</label>
            <input
              className={input}
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={divFlex}>
            <label htmlFor="email">Email</label>
            <input
              className={input}
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={divFlex}>
            <label htmlFor="password">Password</label>
            <input
              className={input}
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={divFlex}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className={input}
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="submit-btn">
            <Button
              type="primary"
              name="Create Account"
              className="w-full my-4"
            />
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default CreateAccountForm;
