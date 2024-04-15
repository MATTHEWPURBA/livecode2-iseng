import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
