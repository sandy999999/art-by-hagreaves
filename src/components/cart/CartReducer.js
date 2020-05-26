import Item1 from "../../images/compressed/hero-journey.jpg";
import { ADD_TO_CART } from "../cart/CartActions";


const initState = {
    items: [
        {id:1, title: "Hero Journey", price: 7500, desc:"Large size spray on wood panel", img:Item1}
    ],
    addedItems:[],
    total: 0
}

const CartReducer=(state=initState, action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)

        let existed_item=state.addedItems.find(item=>action.id===item.id)
        if(existed_item){
            addedItem.quantity += 1
            return{
                ...state,
                total: state.total + addedItem.price
            }
        }
        else{
            addedItem.quantity=1;

            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    else{
        return state
    }
}

export default CartReducer;