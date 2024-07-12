/* eslint-disable react/no-unescaped-entities */
import WarningIcon from "../assets/icons/warning.svg";
import { Link } from "react-router-dom";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Button from "../components/button/button";

export function PageNotFound() {
  return (
    <>
      <Navbar />

      <div className="grid h-[calc(100vh-150px)] place-items-center text-center text-gray-900 dark:text-white">
        <div>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-start">
            <img src={WarningIcon} className="h-20 w-20 sm:h-12 sm:w-12" />

            <h1 className="text-5xl font-bold leading-none ">
              There's been a glitch...
            </h1>
          </div>

          <div className="my-9 text-lg leading-7 dark:text-gray-400">
            <p>We're not quite sure what went wrong.</p>
            <p>
              You can go back, or try looking on our Help Center if you need a
              hand.
            </p>
          </div>

          <Link to="/">
            <Button type="primary" name=" back to homepage" />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
