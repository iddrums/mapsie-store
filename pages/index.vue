<template>
   <div class="home-page">
     <section class="intro">
       <h1>Get the latest laptops for efficient and reliable useage!!! </h1>
     </section>

      <!-- <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-sheet :item="items[i]" height="100%" width="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              <img :src="item.src" style="width:900px; height:500px;" />
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel> -->

     <section>
      <ProductList :products="loadedProducts" />
     </section>
   </div>
</template>

<script>
export default {
  computed: {
    loadedProducts() {
      return this.$store.getters.loadedProducts
    }
  }
    //  data () {
    //    return {
    //      loadedProducts: []
    //    };
    //  },
        //  items: [
        //    {
        //   src: '~assets/images/lap.jpg'
        // },
        // {
        //   src: '~assets/images/lap2.jpg'
        // },
        // {
        //   src: '~assets/images/lap1.jpg'
        // },
        // {
        //   src: '~assets/images/lap3.jpg'
        // },
        // ]
       };
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
  text-align: center;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
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
