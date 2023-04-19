<template>
  <div class="col-md-10">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in library" :key="item.name">
      <library-item-card @add-item="AddItem" :item="item"/>
    </div>
  </div>
  </div>
</template>

<script>
import LibraryItemCard from "@/components/LibraryItemCard.vue";
import LibraryCollection from "@/models/LibraryCollection";
import {Book, Movie, Album} from "@/models/Media";

export default {
  name: "LibraryItemList",
  components: {LibraryItemCard},
  props:[
    'item'
  ],
  data() {
    return {
      cartItem: {},
      library: new LibraryCollection()
          .addItem(new Book('1984', 237))
          .addItem(new Book('The Great Gatsby', 180))
          .addItem(new Book('To Kill a Mockingbird', 336))
          .addItem(new Book('The Seven Habits of Highly Effective People', 381))
          .addItem(new Book('Atomic Habits', 320))
          .addItem(new Movie('Ready Player 1', 122))
          .addItem(new Movie('Avengers: End Game', 189))
          .addItem(new Movie('The Matrix', 136))
          .addItem(new Movie('Forrest Gump', 142))
          .addItem(new Movie('The Godfather', 175))
          .addItem(new Album('Traplantic', 'Shoeline Mafia', 11))
          .addItem(new Album('The Dark Side of the Moon', 'Pink Floyd', 10))
          .addItem(new Album('Abbey Road', 'The Beatles', 17))
          .addItem(new Album('Thriller', 'Michael Jackson', 9))
          .addItem(new Album('20 Exitos', 'Beto Quintanilla', 20))
    }
  },
  methods:{
    AddItem(cartItem){
      console.log(this.cartItem)
        this.cartItem = cartItem
      this.$emit('add-cart-item', this.cartItem)

    }
    },
  }
</script>

<style scoped>

</style>