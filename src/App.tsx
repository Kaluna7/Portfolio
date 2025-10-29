import AllProject from "./pages/AllProject";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/layout/Navbar/Navbar";

export default function App(){
  return(
    <div className="flex flex-col items-center">
      <Navbar />
      <Dashboard />
      <Routes>
        <Route path="/all-project" element={<AllProject />} />    
      </Routes>
    </div>
  );
}