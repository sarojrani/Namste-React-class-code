import { useEffect,useState } from "react";

const useResturentDetail=()=>{
    const [allResturent, setAllResturent] = useState([]);
    const [filteredResturent, setFilterdResturent] = useState([]);
    useEffect(()=>{
        fetchData()
    },[])
    async function fetchData() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&sortBy=RATING&page_type=DESKTOP_WEB_LISTING"
        );
        let json = await data.json();
        // console.log(json)
        setAllResturent(json?.data?.cards[0]?.data?.data?.cards);
        setFilterdResturent(json?.data?.cards[0]?.data?.data?.cards);
      }
      return (allResturent,filteredResturent);
}
export default useResturentDetail;