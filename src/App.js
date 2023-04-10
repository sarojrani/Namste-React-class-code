import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";




          
            //   https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&sortBy=RATING&page_type=DESKTOP_WEB_LISTING


const AppLayout=() => {
    return <div className="layout">
    <Header />
    <Body />
    <Footer />
    </div>
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
