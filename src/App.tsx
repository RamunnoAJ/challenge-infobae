import { Route, Routes } from "react-router";
import Navbar from "./components/nav-bar";
import Home from "./pages/home";
import Users from "./pages/users";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
