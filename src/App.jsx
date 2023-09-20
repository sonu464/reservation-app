import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
