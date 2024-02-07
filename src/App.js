import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import JoinUs from "./Pages/JoinUs";
import MessageUs from "./Pages/MessageUs";
import Projects from "./Pages/Projects";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/messageus" element={<MessageUs />} />
          <Route path="/project" element={<Projects />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
