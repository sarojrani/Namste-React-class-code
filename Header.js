import React from "react";
import ReactDOM  from "react-dom/client";

const HeaderDesign=()=>{
    return(
        <>
        <header >
        <div className="style">
            <span >Logo</span>
            <span>search</span>
            <span>user</span>
            </div>
        </header>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderDesign/>)