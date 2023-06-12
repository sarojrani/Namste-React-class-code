

import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/Constants";
import useResturents from "../utils/useResturents";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ResturentMenu = () => {
  
  const params = useParams();
  const { resId } = params;

  const resturant=useResturents(resId)

const dispatch=useDispatch()

  const handleAddItem=()=>{
    dispatch(addItem("graps"))
  }

  return (
    <>
    <div>
      <h1>resturent id:{resId}</h1>
      <h2> namste resturent</h2>
      <h2>{resturant?.cards[0]?.card?.card?.info?.name}</h2>
            <img src={CDN_URL+resturant?.cards[0]?.card?.card?.info?.cloudinaryImageId}></img>
            <h1>{resturant?.cards[0]?.card?.card?.info?.avgRating}</h1>
            <h2>{resturant?.cards[0]?.card?.card?.info?.sectionId}</h2>
    </div>
    <div>
<button className="bg-green-100 m-1 p-1" onClick={()=>handleAddItem()}>add-Item</button>
<div>
  <h1>Menu</h1>

</div>
    </div>
    </>

  );
};
export default ResturentMenu;
