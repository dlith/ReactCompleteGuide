import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductsDetail";

// const routeDefinitisions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitisions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: "products", element: <ProductsPage />},
      {path: "products/:productId", element: <ProductDetailsPage />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
