// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Home } from './pages/Home';
// import { MapPage } from './pages/MapPage/MapPage';
// import { PageNotFound } from './pages/PageNotFound';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Home />} />
    //     <Route path='/home' element={<Home />} />
    //     <Route path='/showmap' element={<MapPage />} />
    //     <Route path='*' element={<PageNotFound />} />
    //   </Routes>
    // </BrowserRouter>
    <SignUp />
  );
}
