import {BrowserRouter, Routes, Route} from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Gallery from "../pages/Gallery";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}