import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./containers/DefaultLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Helmet>
        <title>Giày Sneaker Nam Nữ Nike, Adidas Chính Hãng, giảm giá đến 70%</title>
        <meta
          name="description"
          content="SALE off lên tới 70%. Uy Tín nhiều năm trên thị trường. Bounty Sneakers chuyên cung cấp Giày Sneaker Thể Thao Adidas, 
          Nike nam nữ Chính Hãng 100%. Đổi trả miễn phí."
        />
        <meta
          name="keywords"
          content="Giày Adidas chính hãng, Giày Nike chính hãng, Giày Adidas, Giày Nike, Adidas, Nike, Giày chính hãng, Giày thể thao"
        />
      </Helmet>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/*" element={<DefaultLayout />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
