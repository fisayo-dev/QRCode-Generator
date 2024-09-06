import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <Router>
      <Routes element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
