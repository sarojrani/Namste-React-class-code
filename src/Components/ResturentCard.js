import { CDN_URL } from "../utils/constants";
// const ResturentCard = (props) => {
//   const { resData } = props;

//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     avgRating,
//     costForTwo,
//     minDeliveryTime,
//     user,
//   } = resData?.data;
const ResturentCard=({cloudinaryImageId,name,cuisines,avgRating,costForTwo,minDeliveryTime})=>{
  return (
    <div className="w-56 p-2 m-2 shadow-xl border border-gray-400 ">
      <img
        className="food-style"
        src={CDN_URL + cloudinaryImageId}
        alt="food-pic"
      />
      <h3 className="font-bold">{name}</h3>
      <h4 >{cuisines?.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{minDeliveryTime} minute</h4>
   
    </div>
  );
};
export default ResturentCard;
