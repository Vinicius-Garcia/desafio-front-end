import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";
import { Header } from "./componentes/header/Header";
import { List } from "./componentes/list/List";
import { Product } from "./componentes/product/Product";
import { Footer } from "./componentes/footer/Footer";
import { Editar } from "./componentes/editar/Editar";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/list" element={<List />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
