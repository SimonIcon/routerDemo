import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import all our routes
import ErrorPage from './ErrorPage'
import Root from './routes/Root';
import HomePage from './routes/HomePage';
import ProductPage from './routes/ProductPage';
import DeliveryPage from './routes/DeliveryPage';
import LoginPage from './routes/LoginPage';

// creating routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "products",
        element: <ProductPage />
      },
      {
        path: "deliveries",
        element: <DeliveryPage />
      },
      {
        path: "login",
        element: <LoginPage />
      }
    ],
  }
]);

// rendering application
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);