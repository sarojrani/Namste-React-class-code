import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ResturentMenu=()=>{
    const[resturent,setResturent]=useState({})
    const params=useParams()
    const {id}=params

    useEffect(()=>{
        getResturentDetail()
    },[])
    async function getResturentDetail(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=121603")
        const json=await data.json()
        console.log(json.data)
        setResturent(json.data)

    }
    return(
        <>
   <h1>resturent id:{id}</h1>
   <h2> namste resturent</h2>
   </>
    )
}
export default ResturentMenu;