<template>
  <div class="card h-100">
    <div class="card-body">
      <component :is="itemCardComponent(item)" :item="item" />
    </div>
    <div class="card-footer d-flex justify-content-between">
      <button class=" btn btn-outline-primary" @click="AddItem">Add To Cart</button>
      <button v-if="item.isAvailable && item.checkOut && item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
      <button v-else-if="item.checkIn" class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
    </div>
  </div>
</template>

<script>

import MovieDetails from "@/components/MovieDetails.vue";
import BookDetails from "./BookDetails.vue";
import AlbumDetails from "@/components/AlbumDetails";

export default {
  name: "LibraryItemCard",
  components: {BookDetails, MovieDetails, AlbumDetails},
  props: {
    item: {type: Object}
  },
  methods: {
    itemCardComponent(item){
      //return item.constructor.name + 'Card'; // will fail with webpack
      return item.constructor.type + 'Details';
    },
    AddItem(){
      console.log(this.item)
      this.$emit('add-item', this.item)
      //   this.item.splice(index, 1)
    }
  },
}
</script>

<style scoped>

</style>