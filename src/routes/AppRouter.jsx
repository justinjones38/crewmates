import {BrowserRouter, Routes, Route} from "react-router";
import Home from "../pages/Home";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}