import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Collection from "./pages/collection/collection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="collection" element={<Collection />} />
        <Route path="user" element="user" />
        <Route path="cart" element="cart" />
        <Route path="search" element="searchbar" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
