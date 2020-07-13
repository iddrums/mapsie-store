<template>
 <section class="page">
      <v-toolbar color="primary" dark>
          <v-toolbar-title>Products Page</v-toolbar-title>
      </v-toolbar>
    <div class="products-page">
   <ProductList  />
  </div>
</section>
</template>

<script>
import ProductList from '@/components/Products/ProductList'
export default {
  middleware: 'log',
  data() {
    return {
      loadedProducts: this.$store.getters.loadedProducts
    }
  },
  }
</script>


<style scoped>
.products-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

}

.page h1 {
  text-align: center;
}

</style>
