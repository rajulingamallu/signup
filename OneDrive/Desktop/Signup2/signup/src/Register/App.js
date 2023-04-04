import {
  createBrowserRouter,RouterProvider
  
} from "react-router-dom";
import Home from "./home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";


function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Register />,
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
