import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Collection from "./pages/collection/collection";
import User from "./pages/user";
import CreateAccountForm from "./pages/createAccount";
import ForgetPasswordForm from "./pages/resetPassword";
import ProductInfo from "./pages/productInfo";
import Cart from "./pages/cartPage";
import { PageNotFound } from "./pages/pageNotFound";
import Success from "./pages/success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/productinfo/:id" element={<ProductInfo />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/createAccount" element={<CreateAccountForm />} />
        <Route path="/forgetPassword" element={<ForgetPasswordForm />} />
        <Route path="/thanks" element="thanks" />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
