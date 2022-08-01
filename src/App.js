import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/post/:id" element={<Posts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
