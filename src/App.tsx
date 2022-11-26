import { Routes, Route } from 'react-router-dom';
import { NewsPage, NotFound, HeroPage, FavoritePage } from './pages';
import { Header } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
