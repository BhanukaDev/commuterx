import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MapPage } from './pages/MapPage/MapPage';
import { PageNotFound } from './pages/PageNotFound';
import SignUp from './pages/SignUp';
import { BrowserCheck } from './components/BrowserCheck';
import { NotSupport } from './pages/NotSupport';

export default function App() {
  return (
    <BrowserRouter>
      <BrowserCheck />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/showmap' element={<MapPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/not-supported' element={<NotSupport />} />
      </Routes>
    </BrowserRouter>
  );
}
