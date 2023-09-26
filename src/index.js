import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {
  About,
  Contact,
  Courses,
  Home,
  Login,
  Playlist,
  Profile,
  Register,
  Teacher_profile,
  Teachers,
  Update,
  Watch_Video
} from "../src/components/index"
import Footer from "./components/SUBS/Footer";
import Header from "./components/SUBS/Headero";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
    <Header/>
      <Home/>
    <Footer/>
     </>
   ,
  },
  {
    path: "/About",
    element: 
    <>
    <Header/>
      <About/>
    <Footer/>
     </>
  }
  ,
  {
    path: "/Contact",
    element: 
    <>
    <Header/>
      <Contact/>
    <Footer/>
     </>
  }
  ,
  {
    path: "/Courses",
    element:
    <>
    <Header/>
      <Courses/>
    <Footer/>
     </>
  }
  ,
  {
    path: "/Login",
    element:
    <>
    <Header/>
      <Login/>
    <Footer/>
     </>
  }
  ,
  {
    path: "/Playlist",
    element: 
    <>
    <Header/>
      <Playlist/>
    <Footer/>
     </>
  }
  ,
  {
    path: "/Profile",
    element:
    <>
    <Header/>
      <Profile/>
    <Footer/>
     </>
  }
  ,
  {
    path: "/Register",
    element: 
    <>
    <Header/>
      <Register/>
    <Footer/>
     </>
  }
  ,
  {
    path: "/Teacher_profile",
    element:
    <>
    <Header/>
      <Teacher_profile/>
    <Footer/>
     </>
  }
  ,
  {
    path: "/Teachers",
    element: 
    <>
    <Header/>
      <Teachers/>
    <Footer/>
     </>
  }
  ,
  {
    path: "/Update",
    element: 
    <>
    <Header/>
      <Update/>
    <Footer/>
     </>
  },
  {
    path: "/Watch_Video",
    element: 
    <>
    <Header/>
      <Watch_Video/>
    <Footer/>
     </>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);