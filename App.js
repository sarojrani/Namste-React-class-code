import React from "react";
import ReactDOM from "react-dom/client";
//creating react element using core react
// const heading = React.createElement("h1", { id: "heading" }, "Hello from react!")

//cretaing react element using jsx
// const jsxHeading = <h1 id="heading">Namste from React!</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)

//React Functional Component
const value="another Functional component"
const Title=() =>(
    <h1 className="container">{value} </h1>
)
const Heading=()=>(
    <>
    <div id="heading">
    {Title()}
    <Title></Title>
    <Title />
      <h1 className="container">Namste React!</h1>
     </div>
     <div className="container"></div>
     <h2>see fregment concept</h2>
     </>
)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading />)