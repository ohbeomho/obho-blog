import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import BlogView from "./pages/BlogView";
import Tutorials from "./pages/Tutorials";
import TutorialView from "./pages/TutorialView";
import Blogs from "./pages/Blogs";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/blogs/:id" element={<BlogView />}></Route>
      <Route path="/tutorials/:kind" element={<Tutorials />}></Route>
      <Route path="/tutorials/:kind/:id" element={<TutorialView />}></Route>
    </Routes>
  );
}
