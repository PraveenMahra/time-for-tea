/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../components/button/button";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

const ForgetPasswordForm = () => {
  const heading = "text-xl text-center font-semibold mb-6";
  const input = "p-2 outline-none mb-8 w-full sm:w-[350px]";
  const form = "bg-[#f4f4f4] p-12 flex flex-col";

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1); // 1: Email form, 2: OTP form, 3: Reset password form
  const [resetPasswordMessage, setResetPasswordMessage] = useState("");
  const [resetPasswordError, setResetPasswordError] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    switch (step) {
      case 1:
        handleForgetPasswordSubmit();
        break;
      case 2:
        handleOtpSubmit();
        break;
      case 3:
        handleResetPasswordSubmit();
        break;
      default:
        break;
    }
  };

  const handleForgetPasswordSubmit = () => {
    if (formData.email === "") {
      showMessage("Please enter your email.");
    } else {
      showMessage("Password reset email sent to: " + formData.email);
      setStep(2); // Move to OTP form
    }
  };

  const handleOtpSubmit = () => {
    // Perform OTP verification (dummy implementation)
    if (formData.otp === "123456") {
      setStep(3); // Move to reset password form
      setResetPasswordMessage("");
    } else {
      setResetPasswordMessage("Invalid OTP. Please try again.");
    }
  };

  const handleResetPasswordSubmit = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      setResetPasswordMessage("Passwords do not match. Please try again.");
      setResetPasswordError(true);
    } else {
      // Perform the password reset operation (dummy implementation)
      setResetPasswordMessage("Password reset successful!");
      setResetPasswordError(false);

      // Clear input fields
      setFormData({
        email: "",
        otp: "",
        newPassword: "",
        confirmPassword: "",
      });

      // Redirect to account page or perform other actions after successful reset
      window.location.href = "/user";
    }
  };

  const showMessage = (message) => {
    setMessage(message);
  };

  const renderFormInputs = () => {
    switch (step) {
      case 1:
        return (
          <>
            <label htmlFor="email">Email</label>
            <input
              className={input}
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </>
        );
      case 2:
        return (
          <>
            <label htmlFor="otp">Enter OTP</label>
            <input
              className={input}
              type="text"
              id="otp"
              value={formData.otp}
              onChange={(e) =>
                setFormData({ ...formData, otp: e.target.value })
              }
              required
            />
          </>
        );
      case 3:
        return (
          <>
            <label htmlFor="newPassword">New Password</label>
            <input
              className={input}
              type="password"
              id="newPassword"
              value={formData.newPassword}
              onChange={(e) =>
                setFormData({ ...formData, newPassword: e.target.value })
              }
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className={input}
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center mb-12">
        <form className={form} onSubmit={handleFormSubmit}>
          <h1 className={heading}>Forget Password</h1>

          {renderFormInputs()}

          <Button
            type="primary"
            name={
              step === 1
                ? "Reset Password"
                : step === 2
                ? "Verify OTP"
                : "Reset Password"
            }
          />

          {step !== 1 && (
            <button type="button" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}

          <p className={resetPasswordError ? "error" : ""}>
            {resetPasswordMessage}
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ForgetPasswordForm;
