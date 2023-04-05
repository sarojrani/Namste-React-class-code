{/* <div id="root">
<div id="parent">
    <div id="child">
        <h1>this is h1 tag</h1>
        <h3>this is h3 tag</h3>
    </div>
</div>

</div> */}

//converted html div to react 
const heading=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"this is an h1 tag"),React.createElement("h3",{},"this is an h3 tag")])
)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)