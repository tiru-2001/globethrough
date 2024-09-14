import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Blog, Parent, About } from './pages';
const App = () => {
  return (
    <section className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
