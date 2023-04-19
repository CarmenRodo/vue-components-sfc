<template>
  <div class="book">
    <h3 class="card-title">{{item.title}}</h3>
    <div class="d-flex justify-content-between">
    <p class="card-text mb-0">Artist: {{item.artist}}</p>
    <p class="card-text mb-0">Track Count: {{item.count}}</p>
    </div>
  </div>
</template>

<script>
import {Album} from "@/models/Media";
export default {
  name: "AlbumDetails",
  props: {
    item: {type: Album}
  },
}
</script>

<style scoped>

</style>