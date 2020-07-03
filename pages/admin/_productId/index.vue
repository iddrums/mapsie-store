<template>
   <div class="admin-product-page">
     <section class="update-form">
    <AdminProductForm :product="loadedProduct" @submit="onSubmitted" />
     </section>
   </div>
</template>

<script>
import AdminProductForm from '@/components/Admin/AdminProductForm'

export default {
  middleware: ['check-auth', 'auth'],
  components: {
    AdminProductForm
  },
  asyncData(context) {
    return context.app.$axios.
    $get(process.env.baseUrl + '/products/' +
    context.params.productId +
    '.json'
    )
    .then(data => {
      return {
        loadedProduct: { ...data, id: context.params.productId }
      }
    })
    .catch(e => context.error());
  },
  methods: {
    onSubmitted(editedProduct) {
    this.$store.dispatch('editProduct', editedProduct).then(() => {
      this.$router.push("/admin");
    });
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
