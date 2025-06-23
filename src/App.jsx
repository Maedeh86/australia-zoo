import { Routes, Route } from 'react-router-dom'; // حذف BrowserRouter از اینجا
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Mammals from './pages/Mammals/Mammals';
import Birds from './pages/Birds/Birds';
import Reptiles from './pages/Reptiles/Reptiles';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mammals" element={<Mammals />} />
        <Route path="birds" element={<Birds />} />
        <Route path="reptiles" element={<Reptiles />} />
      </Route>
    </Routes>
  );
}

export default App;
