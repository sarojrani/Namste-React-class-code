import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import ResturentMenu from "./Components/ResturentMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";


//   https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&sortBy=RATING&page_type=DESKTOP_WEB_LISTING

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
          },
          {
              path: "/restaurant/:resId",
             element: <ResturentMenu />,
                 },
          
    ],
    
  },
  
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
