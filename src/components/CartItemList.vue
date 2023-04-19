<template>
  <div class="col-md-2">
    <div class="card">
      <div class="card-header">
        Cart
      </div>
      <div class="card-body">
  <div class="col-sm-1 col-md-12">
    <div class="col" v-for="item in cart" :key="item.name">
      <cart-item-card @remove-item="RemoveItem" :item="item"/>
    </div>
  </div>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button class="btn btn-outline-warning" @click="CheckOutALl">Check Out Items</button>
<!--        <button onclick="item.isAvailable && item.checkOut && item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>-->

      </div>
    </div>
  </div>
</template>

<script>
import CartItemCard from "@/components/CartItemCard.vue";
import {Book, Movie, Album} from "@/models/Media";
import CartCollection from "@/models/CartCollection";

export default {
  name: "CartItemList",
  components: {CartItemCard},
  props:{
  },
  data() {
    return {
      cart: new CartCollection()
          .addItem(new Book('Atomic Habits', 320))
          .addItem(new Movie('The Godfather', 175))
          .addItem(new Album('Traplantic', 'Shoeline Mafia', 11))

    }
  },
  methods:{
    RemoveItem(index){
      console.log(this.item)
      this.cart.splice(index, 1)
    },
    CheckOutALl(){
      console.log(this.cart)
      console.log(this.cart.length)
    }
  }
}
</script>

<style scoped>

</style>