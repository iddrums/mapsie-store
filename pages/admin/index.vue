<template>
  <div class="admin-page">
    <section class="new-product">
        <AppButton @click="$router.push('/admin/new-product')">Create New Product</AppButton>
        <AppButton style="margin-left: 10px" @click="onLogout">Logout</AppButton>
    </section>
    <section class="existing-products">
      <h1>Existing Products</h1>
        <ProductList isAdmin  :products="loadedProducts" />
    </section>
  </div>
</template>

<script>
export default {
    middleware: ['check-auth', 'auth'],
    computed: {
    loadedProducts() {
      return this.$store.getters.loadedProducts
    }
 },
 methods: {
   onLogout() {
     this.$store.dispatch('logout');
     this.$router.push('/admin/auth');
   }
 }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
  padding-bottom: 100px;

}

.new-product {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-products h1 {
  text-align: center;
}
</style>
