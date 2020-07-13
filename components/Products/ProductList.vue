<template>
   <section class="product-list">
     <ProductPreview
       v-for="product in products"
       :key="product.id"
       :is-admin="isAdmin"
       :product="product"
       />

     </section>
</template>

<script>
import ProductPreview from '@/components/Products/ProductPreview'

export default {
  components: {
    ProductPreview
  },
  props: {
    isAdmin: {
    type: Boolean,
    default: false
    },
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    console.log(this.$store.getters.loadedProducts)
    this.products = this.$store.getters.loadedProducts
  },
}
</script>

<style scoped>
.product-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
