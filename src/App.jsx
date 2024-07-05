import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Collection from "./pages/collection/collection";
import User from "./pages/user";
import CreateAccountForm from "./pages/createAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="collection" element={<Collection />} />
        <Route path="user" element={<User />} />
        <Route path="cart" element="cart" />
        <Route path="search" element="searchbar" />
        <Route path="createAccount" element={<CreateAccountForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
