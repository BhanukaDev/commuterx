import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MapPage } from './pages/MapPage/MapPage';
import { ErrorPage } from './pages/ErrorPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/home' element={<Home />} />
        <Route path='/showmap' element={<MapPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
