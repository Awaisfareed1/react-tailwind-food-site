import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import About from "./components/About";

export default function App() {
  return (
    <div className="text-gray-600 font-nunito bg-gray-50 md:grid md:grid-cols-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Wrapper />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  )
}