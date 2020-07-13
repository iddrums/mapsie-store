<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute temporary
    >
     <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      >
      </v-app-bar-nav-icon>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
         <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
         <TheFooter @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav
     :show="displaySidenav"
       @close="displaySidenav = false" />
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'
import TheFooter from '@/components/Navigation/TheFooter'

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter
  },
  data () {
    return {
      items: 0,
      drawer: null,
      displaySidenav: false
    }
  }
}
</script>
<style scoped>
  .container {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 0 !important;
  }

  html {
    font-family: 'Open Sans', sans-serif;
}

 body {
   margin: 0;
 }
</style>
