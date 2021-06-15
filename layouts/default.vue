<template>
  <v-app>
    <v-main>
      <v-container>
        <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
        <TheFooter @sidenavToggle="displaySidenav = !displaySidenav" />
        <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";
import TheFooter from "@/components/Navigation/TheFooter";

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter
  },
  data() {
    return {
      displaySidenav: false
    };
  }
};
</script>
<style scoped>
.container {
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding: 0 !important;
}

@media (min-width: 960px) {
.container {
    max-width: 100%;
    margin-bottom: 100px;
}
}

.bar {
  margin-bottom: 2px;
}

html {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
}
</style>
