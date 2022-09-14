import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./containers/DefaultLayout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<DefaultLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
