import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/categories/Categories';
import Books from './components/books/Books';
import Root from './components/root/Root';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Root />}>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
