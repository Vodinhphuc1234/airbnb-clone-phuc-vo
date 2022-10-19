import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

export default function CustomizedRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
