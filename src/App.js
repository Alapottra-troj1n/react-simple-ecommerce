import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Error from "./components/404/Error";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
    </div>
  );
}

export default App;
