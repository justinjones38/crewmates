import {BrowserRouter, Routes, Route} from "react-router";
import Home from "../pages/Home";
import Layout from "../layout/Layout";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}