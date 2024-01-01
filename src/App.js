import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SinglePage from "./Components/Watch/SinglePage";
import "./App.css";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
