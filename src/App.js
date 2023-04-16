import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import About from "./Components/About";
import Profile from "./Components/ProfileClass";
// import Profile from "./Components/Profile";
import ResturentMenu from "./Components/ResturentMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer";

//   https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&sortBy=RATING&page_type=DESKTOP_WEB_LISTING

//chunking
//lazy loading
//dynamic bundling
const Instamart=lazy(()=>import("./Components/Instamart"))
const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      {/* <About />
      <Body /> */}
      <Outlet/>
      <Footer />
    </div>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
        {
            path: "/",
            element: <Body />,
          },
        {
            path: "/about",
            element: <About />,
            children:[
              {
                path:"profile",
                element:<Profile />
              }
            ],
          },
          {
              path: "/restaurant/:resId",
                element: <ResturentMenu />,
               },
               {
                path:"/instamart",
                element:<Suspense fallback={<Shimmer/>}><Instamart /></Suspense>
              }
          
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
