import {BrowserRouter, Routes, Route} from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Gallery from "../pages/Gallery";
import GalleryInfo from "../pages/GalleryInfo";
import Edit from "../pages/Edit";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/:id" element={<GalleryInfo />} />
          <Route path="gallery/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}