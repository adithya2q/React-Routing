
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Layout from './components/Layout';
import Users, { userLoader } from './components/Users';
import NotFound from './components/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "users/:id", element: <Users />, loader: userLoader },
      { path: "*", element: <NotFound /> },
      { path: "/notfound", element: <NotFound /> },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;