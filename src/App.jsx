import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/Globalstyle";
import Header from "./components/Header/Index";
import Home from "./components/Home/Index";
import Projects from "./components/Projects/Index";
import About from "./components/About/Index";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
