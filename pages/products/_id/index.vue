<template>
  <div class="single-product-page">
  <section class="product">
    <h1 class="product-title">{{ loadedProduct.title }}</h1>
    <div class="product-details">
      <div class="product-detail">Last updated on {{ loadedProduct.updatedDate | date }}</div>
      <div class="product-detail">Written by {{ loadedProduct.author }}</div>
    </div>
    <p class="product-content">{{ loadedProduct.content }}</p>
    <div
          class="product-thumbnail"
          :style="{backgroundImage: 'url(' + loadedProduct.thumbnail + ')'}"></div>
         <div class="product-content"></div>
    <p class="product-price">₦{{ loadedProduct.price }}</p>
  </section>
  <section class="product-feedback">
    <p>
         We design experiences for inspiring clients. Our secret is a
          meaningful culture that binds us together as a Design Tribe.
        </p>
  </section>
      <v-dialog
      v-model="dialog"
      width="500"
    >
     <template v-slot:activator="{ on }">
    <v-btn
      v-on="on" @click="addToCart" color="orange" text>
        <v-icon size="40">mdi-cart</v-icon>
    </v-btn>
     </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          <p>Added to cart successfully.</p>
        </v-card-title>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="orange"
            text
            @click="dialog = false">Okay
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

     <div>
                <v-btn v-if="userId === productId"
                  @click.prevent="deleteProduct(productId)" class="ma-2" color="orange darken-2" dark>
          Delete
          </v-btn>

               <v-btn to="/products" class="ma-2" color="orange darken-2" dark>
            <v-icon dark left>mdi-arrow-left</v-icon>Back to products
          </v-btn>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      product: {},
      userId: '',
      productId: ''
    }
  },
  asyncData(context) {
   return context.app.$axios.$get('/products/' + context.params.id + '.json')
   .then(data => {
     return {
       loadedProduct: data
     }
   })
   .catch(e => context.error(e))
  },
  methods: {
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.$route.params.id)
    },
    addToCart () {
      this.$store.dispatch('addCart', {...this.loadedProduct, id: this.$route.params.id})
    }
  }
};
</script>


<style scoped>
.single-product-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
  padding-bottom: 120px;
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
  height: 250px;
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

