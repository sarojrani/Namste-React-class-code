import React, { lazy,Suspense, useState,useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import About from "./Components/About";


import ResturentMenu from "./Components/ResturentMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer";
import Instamart from "./Components/Instamart";
import Cart from "./Components/Cart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";


//   https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&sortBy=RATING&page_type=DESKTOP_WEB_LISTING

//chunking
//lazy loading
//dynamic bundling
const Instamart=lazy(()=>import("./Components/About"))
const AppLayout = () => {
const [user,setUser]=useState({
  name:"saroj kumari",
  email:"sarojkumarirani345@gmail.com"
})
  return (
    <Provider store={store}>
    <UserContext.Provider value={{
      user:user,
      setUser:setUser
    }}>

      <Header />
      {/* <About />
      <Body /> */}
      <Outlet/>
      <Footer />
      </UserContext.Provider>
      </Provider>
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
            element: <Body/>,
          },
        {
            path: "/about",
            element:<Suspense fallback={<Shimmer/>}><About /></Suspense>
          },
          {
              path: "/restaurant/:resId",
                element: <ResturentMenu />,
               },
               {
                path:"/instamart",
                // element:<Suspense fallback={<Shimmer/>}><Instamart /></Suspense>
                element:<Instamart/>
              },
              {
                path:"/cart",
                element:<Cart/>
              }
          
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
