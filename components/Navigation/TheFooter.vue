<template>
  <div>
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <v-footer class="lead">
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
</div>
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
.lead {
  width: 100%;
  position: absolute;
  display: flex;
  padding: 0 0px;
  justify-content: space-around;
  z-index: 100;
  bottom: 0;
}
</style>
