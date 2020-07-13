<template>
    <div class="strong">
        <v-card class="mx-auto my-12">
            <v-container fluid>
              <v-row dense>
                 <v-dialog v-model="open" width="500">
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
                    <v-btn color="orange" text @click="open = false">
                      Okay
                    </v-btn>
                    </v-card-actions>
                  </v-card>
             </v-dialog>
                <v-col xs="16" sm="8" md="12">
         <v-card>
          <nuxt-link  :to="productLink" class="product-preview">
          <article>
              <div
              class="product-thumbnail"
              :style="{backgroundImage: 'url(' + product.thumbnail + ')'}"></div>
            <div class="product-content">
            <h1>{{ product.title }}</h1>
            <p>{{ product.previewText }}</p>
            <p>₦{{ product.price }}</p>
            </div>
        </article>
      </nuxt-link>
        <v-card-actions>
                <v-btn :to="productLink" color="orange" text
                  >More Info</v-btn
                >

                <v-btn
                        @click="addToCart"
                        color="orange"
                        text
                      >
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                         </v-card-actions>
                     </v-card>
                 </v-col>
              </v-row>
          </v-container>
     </v-card>
  </div>
</template>

<script>
export default {
   data () {
    return {
      open: false,
      // product: {},
      products: []
    }
  },
  name: 'ProductPreview',
  props: {
    isAdmin: {
      type: Boolean,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
    },
    computed: {
      productLink() {
        return this.isAdmin ? '/admin/' + this.product.id : '/products/' + this.product.id
      }
    },
    methods: {
      addToCart () {
        this.$store.dispatch('addCart', this.product)
        this.open = true
      }
    }
  }


</script>
<style scoped>
.product-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

/* a {
  text-decoration: none;
  color: black;
} */

@media (min-width: 850px) {
  .product-preview {
    width: 600px;
    margin: 10px;
  }
}

.strong {
  padding-bottom: 80px;

}

.product-thumbnail {
  width: 100%;
  height: 250px;
  background-position: center;
  background-size: cover;
}

.product-content {
  padding: 10px;
  text-align: center;
}

a:hover .product-content,
a:active .product-content {
  background-color: #ccc;
}
</style>
