import "./App.css";
import BestSellers from "./components/BestSellers/BestSellers";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BestSellers />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
