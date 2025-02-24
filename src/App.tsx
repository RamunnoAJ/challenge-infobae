import { Route, Routes } from "react-router";
import Navbar from "./components/nav-bar";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
