<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest laptops which is more reliable and efficient globally!!!</h1>
    </section>

   <div class="show">
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-sheet :item="items[i]" height="100%" width="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              <img :src="item.src" style="width:1200px; height:500px;" />
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
   </div>

    <div>
     <h3 class="text-center mt-6">Latest Products</h3>
      <!-- <ProductList :products="loadedProducts" /> -->
      <div class="done">
      <v-row>
        <v-col xs="12" sm="6" md="4" v-for="product in loadedProducts.slice(-3)" :key="product.id">
         <nuxt-link to="/">
            <v-img
              :src="product.thumbnail"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
            ></v-img>
             <v-card-title primary-title class="justify-center" v-text="product.title"></v-card-title>
         </nuxt-link>
        </v-col>
      </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/images/lap1.jpg")
        },
        {
           src: require("@/assets/images/lap2.jpg")
        },
        {
          src: require("@/assets/images/lap.jpg")
        },
        {
          src: require("@/assets/images/lap3.jpg")
        }
      ]
    };
  },
  computed: {
    loadedProducts() {
      return this.$store.getters.loadedProducts;
    }
  }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 70px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
  margin: auto;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: fit-content;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
  text-align: center;
  margin-right: 10%;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.home-page {
  width: 100%;
  margin: auto;
  padding-bottom: 90px;
}

.done {
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  padding-right: 60px;
  padding-left: 20px;
}

.show {
  margin-left: 18px;
  margin-right: 2px;
  padding-right: 20px;
  padding-left: 0px;
  padding-top: 10px;
}

.featured-products {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
