<template>
   <section class="product-list">
     <ProductPreview
       v-for="product in products"
       :key="product.id"
       :id="product.id"
       :is-admin="isAdmin"
       :thumbnail="product.thumbnail"
       :title="product.title"
       :previewText="product.previewText"
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
    products: {
      type: Array,
      required: true
    }
  }
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
