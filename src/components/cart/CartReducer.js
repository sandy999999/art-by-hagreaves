import Item1 from "../../images/compressed/hero-journey.jpg";
import Item2 from "../../images/compressed/om-tat-sat.jpg";
import Item3 from "../../images/compressed/bob-dylan.jpg";
import Item4 from "../../images/compressed/girl-with-bubbles.jpg";
import Item5 from "../../images/compressed/collective-unconscious.jpg";
import Item6 from "../../images/compressed/spirit-shaman.jpg";
import Item7 from "../../images/compressed/this-way-up.jpg";
import Item8 from "../../images/compressed/tiger-2.jpg";
import Item9 from "../../images/compressed/duality.jpg";
import Item10 from "../../images/compressed/keith-richards.jpg";
import Item11 from "../../images/compressed/fuck-it.jpg";
import Item12 from "../../images/compressed/shambala.jpg";
import { ADD_TO_CART } from "../cart/CartActions";


const initState = {
    items: [
        {id:1, title: "Hero Journey", price: 7500, desc:"Spray on wood panel", img:Item1, size: "1mx1m"},
        {id:2, title: "Om Tat Sat", price: 7500, desc:"Spray on wood panel", img:Item2, size: "3mx1m"},
        {id:3, title: "Om Tat Sat", price: 7500, desc:"Spray on wood panel", img:Item3, size: "3mx1m"},
        {id:4, title: "Om Tat Sat", price: 7500, desc:"Spray on wood panel", img:Item4, size: "3mx1m"},
        {id:5, title: "Om Tat Sat", price: 7500, desc:"Spray on wood panel", img:Item5, size: "3mx1m"},
        {id:6, title: "Om Tat Sat", price: 7500, desc:"Spray on wood panel", img:Item6, size: "3mx1m"},
        {id:7, title: "Om Tat Sat", price: 7500, desc:"Spray on wood panel", img:Item7, size: "3mx1m"},
        {id:8, title: "Om Tat Sat", price: 7500, desc:"Spray on wood panel", img:Item8, size: "3mx1m"},
        {id:9, title: "Om Tat Sat", price: 7500, desc:"Spray on wood panel", img:Item9, size: "3mx1m"},
        {id:10, title: "Om Tat Sat", price: 7500, desc:"Spray on wood panel", img:Item10, size: "3mx1m"},
        {id:11, title: "Om Tat Sat", price: 7500, desc:"Spray on wood panel", img:Item11, size: "3mx1m"},
        {id:12, title: "Om Tat Sat", price: 7500, desc:"Spray on wood panel", img:Item12, size: "3mx1m"},
    ],
    addedItems:[],
    total: 0
}

const CartReducer=(state=initState, action) => {
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item => item.id===action.id)

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