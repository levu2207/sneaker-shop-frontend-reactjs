import Profile from "../pages/Profile/Profile";
import About from "./../pages/About/About";
import Cart from "./../pages/Cart/Cart";
import Contact from "./../pages/Contact/Contact";
import Home from "./../pages/Home/Home";
import News from "./../pages/News/News";
import NotFound from "./../pages/NotFound/NotFound";
import Pay from "./../pages/Pay/Pay";
import ProductDetail from "./../pages/ProductDetail/ProductDetail";
import Products from "./../pages/Products/Products";

const routes = [
  { path: "", component: <Home /> },
  { path: "/home", component: <Home /> },
  { path: "/profile", component: <Profile /> },
  { path: "/products", component: <Products /> },
  { path: "/products/:id", component: <ProductDetail /> },
  { path: "/news", component: <News /> },
  { path: "/contact", component: <Contact /> },
  { path: "/about", component: <About /> },
  { path: "/cart", component: <Cart /> },
  { path: "/pay", component: <Pay /> },
  { path: "*", component: <NotFound /> },
];

export default routes;
