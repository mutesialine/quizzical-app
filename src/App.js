import Home from "./components/pages/Home";
import Questions from "./components/pages/Questions";
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom"
import Answers from "./components/pages/Answers";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Questions />} />
          <Route path="/answer" element={<Answers />} />
        </Routes>
      </Router>
    </>
  );
}
