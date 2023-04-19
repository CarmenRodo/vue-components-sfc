<template>
  <nav class="navbar bg-dark">
    <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
  </nav>
  <div class="container-fluid mt-3">
    <div class="row">
        <library-item-list></library-item-list>
            <cart-item-list></cart-item-list>
          </div>
        </div>
</template>

<script>
import LibraryItemList from "@/components/LibraryItemList.vue";
import CartItemList from "@/components/CartItemList";

export default {
  name: 'App',
  components: {
    LibraryItemList,
    CartItemList
  },
  // props: {
  //   cartItem,
  // }

}
</script>

<style lang="scss">

</style>
