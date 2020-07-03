<template>
  <div class="single-product-page">
  <section class="product">
    <h1 class="product-title">{{ loadedProduct.title }}</h1>
    <!-- <img :src="singleProduct.image" height="350px" width="500px" /> -->
    <!-- <h1>₦{{ singleProduct.price }}</h1> -->
    <!-- <h1>Description of the Product</h1> -->
    <!-- <h1>Price of the Product</h1> -->
    <!-- <h1>Image of the Product</h1> -->
    <div class="product-details">
      <div class="product-detail">Last updated on {{ loadedProduct.updatedDate | date }}</div>
      <div class="product-detail">Written by {{ loadedProduct.author }}</div>
    </div>
    <p class="product-content">{{ loadedProduct.content }}</p>
    <div class="product-thumbnail">{{ loadedProduct.thumbnail }}</div>
    <p class="product-price">{{ loadedProduct.price }}</p>
  </section>
  <section class="product-feedback">
    <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a></p>
  </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
   return context.app.$axios.$get('/products/' + context.params.id + '.json')
   .then(data => {
     return {
       loadedProduct: data
     }
   })
   .catch(e => context.error(e))
  }
};
</script>


<style scoped>
.single-product-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.product {
  width: 100%;
}

@media (min-width: 768px) {
  .product {
    width: 600px;
    margin: auto;
  }
}

.product-title {
  margin: 0;
}

.product-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.produc-price {
  width: 20%;
  height: 80px;
  /* background-position: center;
  background-size: cover; */
}

.product-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .product-details {
    flex-direction: row;
  }
}

.product-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.product-feedback a {
  color: red;
  text-decoration: none;
}

.product-feedback a:hover,
.product-feedback a:active {
  color: salmon;
}
</style>

