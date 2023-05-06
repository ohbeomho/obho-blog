import { Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import View from "./pages/View"

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/view/:id" element={<View />}></Route>
    </Routes>
  )
}
