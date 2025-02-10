import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import History from "./pages/History/History";
import Footer from "./components/Footer/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
