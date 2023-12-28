
import './App.css';
import { Routes ,Route,Navigate} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import ProductList from "./pages/products/ProductList.jsx";
import Create from "./pages/products/Create.jsx";
import Update from "./pages/products/Update.jsx";
import ProductDetail from './pages/products/ProductDetail.jsx';

function App() {

  return (
    <>
    <Routes>
      <Route path={'products'} element={<Home />}>
        <Route path={'list'} element={<ProductList />} />
        <Route path={':id'} element={<ProductDetail />} />
        <Route path={'add'} element={<Create />} />
        <Route path={'edit/:id'} element={<Update />} />
      </Route>

      <Route path='*' element={<Navigate to="products/list" />} />
      {/*dieu huong trang khi nhap sai*/}
    </Routes >
    </>
  )
}

export default App;
