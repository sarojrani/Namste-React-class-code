import ResturentCard from "./ResturentCard";
// import resList from "../utils/mockdata";
import { useState,useEffect } from "react";
import Simmer from "./Shimmer";

function filterData(searchtext,allResturent){
    const filterData=allResturent.filter((resturant)=>
    resturant?.data?.name?.toLowerCase()?.includes(searchtext.toLowerCase())
    )
    return filterData;
}

const Body=()=>{
   const [allResturent,setAllResturent]=useState([])
   const [filteredResturent,setFilterdResturent]=useState([])
   const [searchtext,setSearchtext]=useState("")
//    console.log(listOfResturent)

   useEffect(()=>{
    // console.log("call  this when dependency changed")
    // console.log("useEffect")
    fetchData()
   },[])

   async function fetchData(){
    const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&sortBy=RATING&page_type=DESKTOP_WEB_LISTING")
    let json= await data.json()
    // console.log(json)
    setAllResturent(json?.data?.cards[0]?.data?.data?.cards)
    setFilterdResturent(json?.data?.cards[0]?.data?.data?.cards)
   }

   console.log("render")
   if(filteredResturent?.length==0) return <h1>No resturant mtach to filter!!</h1>
   //early return
   if(!allResturent) return null;
    return (allResturent?.length===0)?<Simmer />:(
        <>
        <div className="body">
        
        <div className="filter">
        <input type="text" value={searchtext} onChange={(e)=>setSearchtext(e.target.value)
        }/>
            <button className="search-btn" 
            onClick={() => {
                 const data=filterData(searchtext,allResturent)
                    setFilterdResturent(data)
                }} >search</button>
        </div>
        
            <div className="res-container">

           {
            filteredResturent.map((resturent)=> (
              <ResturentCard  key={resturent.data.id} resData={resturent} />)
            )
           }
            
             </div>
        </div>
        </>
    )
}
export default Body;