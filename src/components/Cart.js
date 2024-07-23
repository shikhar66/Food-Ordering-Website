import { useSelector,useDispatch} from "react-redux";
import FoodItem from "./FoodItems";
import {clearCart} from "../utils/cartSlice"

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items); //subscribing to specific items for optimaztion purposes
     const dispatch = useDispatch();

     const handleClearCart = ()=>{
        dispatch(clearCart())
     }
      
    return(
      //   <div>
      //      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      //   <button className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}>Clear Cart</button>
      //     <div className="flex" >
      //      {cartItems.map((item)=>(
      //          <FoodItem key={item.id} {...item} />
      //      ))}
      //      </div>
        
      //   </div>
      <div className="container mx-auto p-4">
  <h1 className="font-bold text-3xl text-center mb-4">Cart Items - {cartItems.length}</h1>
  <div className="flex justify-center">
    <button
      className="bg-red-500 text-white p-2 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
      onClick={() => handleClearCart()}
    >
      Clear Cart
    </button>
  </div>
  <div className="flex flex-wrap justify-center mt-6 gap-4">
    {cartItems.map((item) => (
      <FoodItem
        key={item.id}
        {...item}
        className="bg-white rounded-lg shadow-md p-4 w-64 transform hover:scale-105 transition duration-300"
      />
    ))}
  </div>
</div>
)
}
export default Cart;