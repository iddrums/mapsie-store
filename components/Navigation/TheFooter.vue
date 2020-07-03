<template>
<v-footer class="footer">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
  <v-footer class="zeal">
    <v-card
      class="flex"
      flat
      tile
      color="primary" dark
    >

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
      <strong>Designed by iddrumz</strong>
        <v-spacer></v-spacer>

       <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</v-footer>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";


export default {
   name: "TheFooter",
  components: {
    TheSideNavToggle
  },
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
      'mdi-telegram',
      'mdi-wechat',
      'mdi-snapchat',
      'mdi-whatsapp'
    ]
  })
}
</script>

<style scoped>
 .zeal {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 0px;

}

.footer {
  width: 100%;
  position: fixed;
  /* height: 10%; */
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  /* background-color: blue; */
  z-index: 100;
  /* box-sizing: border-box; */
  /* padding: 20px; */
  bottom: 0;

}
</style>
