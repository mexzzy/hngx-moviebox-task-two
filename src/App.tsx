import "./App.css";
import Main from "./pages/Main";
import MoviePage from "./pages/MoviePage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Movie page" element={<MoviePage />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
