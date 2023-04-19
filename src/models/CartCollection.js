import CartItem from "@/models/CartItem";

function CartCollection(){
    let arr = [];

    arr.addItem = function(item){
        this.push(new CartItem(item));

        return this; // allows for chaining
    }

    return arr;
}

export default CartCollection;