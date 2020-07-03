<template>
  <div v-if="$store.state.cartProducts.length > 0" class="word">
    <div class="text-center pt-2">
      <h1>Welcome To Our Cart Page!!!</h1>
    </div>
    <div>
      <v-card>
        <v-simple-table>
          <thead>
            <tr>
              <th></th>
              <th>
                <strong>Product</strong>
              </th>
              <th>
                <strong>Price</strong>
              </th>
              <th>
                <strong>QTY</strong>
              </th>
              <th>
                <strong>Amount</strong>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in $store.state.cartProducts" :key="product.id">
              <td>
                <img :src="product.image" height="200px" width="200px" />
              </td>
              <td>
                <strong>{{ product.title }}</strong>
              </td>
              <td>
                <strong>{{ product.price }}</strong>
              </td>
              <td>
                <strong>{{ product.quantity }}</strong>
              </td>
              <td>
                <strong>{{ product.price * product.quantity }}</strong>
              </td>
              <div class="view">
                <v-btn
                  @click="toCart(product)"
                  style="margin-top: 20px; width: 10px;"
                  color="#FFD180"
                >+</v-btn>
                <v-btn
                  :disabled="product.quantity === 1"
                  @click="decreaseQuantity(product)"
                  style="margin-top: 20px; width: 10px;"
                  color="#BF360C"
                >-</v-btn>
                <v-btn
                  @click="removeFromCart(product)"
                  style="margin-top: 20px; width: 10px;"
                  color="#FF3D00"
                >X</v-btn>
              </div>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
      <div class="text-center pt-2">
        <h2>Total: ₦{{ totalPrice }}</h2>
      </div>
    </div>
    <div class="text-center pt-2">
      <v-btn to="/checkout" class="mr-2" color="primary" dark>Checkout</v-btn>
      <v-btn to="/" class="mr-2" color="primary" dark>Continue shopping</v-btn>
    </div>
  </div>
  <div v-else>
      <h2 class="text-center">Cart is empty.</h2>
    </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  computed: {
    cartProducts () {
      return this.$store.getters.cartProducts
    },
    totalPrice () {
      return this.$store.state.cartTotal
    }
  },
  methods: {
    removeFromCart (product) {
      this.$store.dispatch('removeFromCart', product)
    },
    toCart (product) {
      this.$store.dispatch('toCart', product)
    },
    decreaseQuantity (product) {
      this.$store.dispatch('decreaseQuantity', product)
    }
  }
}
</script>

<style scoped>
.view {
  display: flex;
  flex-direction: column;
}
.word {
  padding-bottom: 100px;
}
</style>
