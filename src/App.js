import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import { Product } from "./pages/product/Product";
import NewProductPage from "./pages/newProductPage/NewProductPage";



function App() {
  return (
      <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/users/user/:userId" element={<User/>} />
          <Route path="/newUser" element={<NewUser/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/products/product/:productId" element={<Product/>} />
          <Route path="/newProduct" element={<NewProductPage/>} />




        </Routes>
        </div>
      </Router>
  );
}

export default App;
