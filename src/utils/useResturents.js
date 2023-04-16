
import { useState } from "react";

const useResturents=(resId)=>{
const [resturent,setResturent]=useState(null)

useEffect(() => {
    getResturentDetail();
  }, []);
  async function getResturentDetail() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=296218&submitAction=ENTER" +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setResturent(json.data);
  }
  return resturent;
}
export default useResturents;