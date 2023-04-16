
 export function filterData(searchtext,allResturent){
    const filterData=allResturent.filter((resturant)=>
    resturant?.data?.name?.toLowerCase()?.includes(searchtext.toLowerCase())
    )
    return filterData;
}