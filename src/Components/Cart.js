
import { clearCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux"

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()

    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    return(
        <>
            <h1>cart items-{cartItems.length}</h1>
            <button className="bg-blue-50 m-2 p-1" onClick={()=>handleClearCart()}>clearcart</button>
        </>
    )
}
export default Cart