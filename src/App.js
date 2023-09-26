import { About, Home } from "./components";

import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
      <About/>
    </>
  );
}

export default App;
