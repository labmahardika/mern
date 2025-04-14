import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ArticleList from "./pages/ArticleList.jsx";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20 ">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/List" element={<ArticleList />} />
          <Route path="/Article/:name" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
