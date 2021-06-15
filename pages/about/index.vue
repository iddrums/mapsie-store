<template>
<div class="weak">
  <v-container>
    <v-layout>
      <v-flex xs12>
        <h2>We elevate life’s experiences through fashion</h2>
        <p>
          We design experiences for inspiring clients. Our secret is a
          meaningful culture that binds us together as a Design Tribe.
        </p>

        <h2>Our noble cause</h2>
        <p>
          In order to succeed, we have to nurture a culture that wants to play a
          part in elevating people’s experiences and making things better. It
          starts with creating the habit of elevating the experiences within
          good fashion wears to empower our team and then elevating the
          experiences of our clients and their users.It then extends beyond what
          we do today, when we then ask ourselves “How do we craft the best life
          experiences for the world?”
        </p>

        <h2>We are guided by values also We believe in giving back</h2>
        <p>
          We created the Mapsie fashion room as a direct reflection of our
          culture and values. It serves as a platform that guides our vision,
          services and how we measure our success. Simply put, it’s how we run
          our company by our culture. For every one of our accomplishments,
          we've made many mistakes. So once we proudly share our breakthroughs
          in design methodology and company culture with our community so they
          succeed faster. Here's some of our latest trending fashion wears.
        </p>
        <v-carousel cycle height="500" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-sheet :item="items[i]" height="100%" width="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">
                  <img :src="item.src" style="width:900px;height:500px;" />
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  data () {
       return {
         items: [
           {
             src: require("@/assets/images/lap.jpg")
             },
             {
                src: require("@/assets/images/lap1.jpg")
            },
            {
              src: require("@/assets/images/lap2.jpg")
            },
            {
              src: require("@/assets/images/lap3.jpg")
            },
         ]
       }
    }
}
</script>

<style scoped>
.weak {
  padding-bottom: 100px;
}
</style>
