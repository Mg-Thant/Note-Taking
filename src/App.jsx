import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Create,
  Edit,
  Main,
  Home,
  Details,
  SignIn,
  SignUp,
} from "./pages/index";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/edit/:id",
          element: <Edit />,
        },
        {
          path: "/notes/:id",
          element: <Details />,
        },
        {
          path: "/register",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <SignIn />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
