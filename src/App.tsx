import { Routes, Route } from "react-router-dom";
import { NewsPage } from './pages';
import { Header } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<NewsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
