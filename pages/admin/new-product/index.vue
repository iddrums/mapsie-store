<template>
  <div class="admin-new-product-page">
    <section class="new-product-form">
       <AdminProductForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminProductForm from '@/components/Admin/AdminProductForm'


export default {
  middleware: ['check-auth', 'auth'],
  components: {
   AdminProductForm
  },
  methods: {
    onSubmitted(productData) {
     this.$store.dispatch('addProduct', productData).then(() => {
      this.$router.push('/admin');
     });
    }
  }
};
</script>

<style scoped>
.new-product-form {
  width: 90%;
  margin: 20px auto;
}

.admin-new-product-page {
  padding-bottom: 100px;

}

@media (min-width: 768px) {
  .new-product-form {
    width: 500px;
  }
}
</style>
