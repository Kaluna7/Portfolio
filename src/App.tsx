import AllProject from "./pages/AllProject";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/layout/Navbar/Navbar";
import TodoList from "./components/layout/Project/Todo-List/Todo-list";

export default function App(){
  return(
    <main className="flex flex-col items-center">
      <header className="fixed z-50">
      <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/all-project" element={<AllProject />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/all-project" element={<AllProject />} />
      </Routes>
    </main>
  );
}