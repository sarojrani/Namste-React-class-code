
import { useState } from "react";
import { useEffect } from "react";

const useResturents=(resId)=>{
const [resturent,setResturent]=useState(null)

useEffect(() => {
    getResturentDetail();
  }, []);
  async function getResturentDetail() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940499&lng=85.1376051&restaurantId=${resId}&submitAction=ENTER` 
        
    );
    const json = await data.json();
    console.log(json.data);
    setResturent(json.data);
  }
  return resturent;
}
export default useResturents;
//resturentId=296218