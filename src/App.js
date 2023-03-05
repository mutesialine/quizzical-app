import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz";
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom"
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
}
