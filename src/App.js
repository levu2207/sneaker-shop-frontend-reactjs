import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./containers/DefaultLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/*" element={<DefaultLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
