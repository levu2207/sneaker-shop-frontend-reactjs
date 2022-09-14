import About from "./../pages/About/About";
import Cart from "./../pages/Cart/Cart";
import Contact from "./../pages/Contact/Contact";
import Home from "./../pages/Home/Home";
import Login from "./../pages/Login/Login";
import News from "./../pages/News/News";
import NotFound from "./../pages/NotFound/NotFound";
import Product from "./../pages/Product/Product";

const routes = [
  { path: "", component: <Home /> },
  { path: "/home", component: <Home /> },
  { path: "/product", component: <Product /> },
  { path: "/news", component: <News /> },
  { path: "/contact", component: <Contact /> },
  { path: "/about", component: <About /> },
  { path: "/cart", component: <Cart /> },
  { path: "/login", component: <Login /> },
  { path: "*", component: <NotFound /> },
];

export default routes;
