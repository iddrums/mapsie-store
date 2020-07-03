<template>
  <div class="products-page">
   <ProductList :products="loadedProducts" />
  </div>
</template>

<script>
export default {
  middleware: 'log',
   computed: {
     loadedProducts() {
       return this.$store.getters.loadedProducts
     }
   }
    };
</script>


<style scoped>
.products-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
