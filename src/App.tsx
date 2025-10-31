import AllProject from "./pages/AllProject";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/layout/Navbar/Navbar";

export default function App(){
  return(
    <main className="flex flex-col items-center">
      <header className="fixed">
      <Navbar />
      </header>
      <Dashboard />
      <Routes>
        <Route path="/all-project" element={<AllProject />} />    
      </Routes>
    </main>
  );
}