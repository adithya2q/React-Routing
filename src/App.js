
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Layout from './components/Layout';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "ProductDetails/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },


      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;