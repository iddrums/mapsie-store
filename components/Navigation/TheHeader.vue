<template>
  <div class="header-container">
    <header class="the-header" color="primary" dark>
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <v-toolbar-title>
        <nuxt-link to="/">Mapsie Store</nuxt-link>
      </v-toolbar-title>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link v-if="!auth" to="/admin">Login</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/products">Products</nuxt-link></li>
          <li class="nav-item"><nuxt-link v-if="!auth" to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/cart">Cart</nuxt-link></li>
          <li class="nav-item"><nuxt-link v-if="auth" to="/admin/auth">Logout</nuxt-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  },
  computed: {
  auth () {
    return this.$store.getters.isAuthenticated
   }
  },
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: blue;
  z-index: 100;
  box-sizing: border-box;
  padding: 20px;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;

}

.v-toolbar__title a,
nav a {
  color: white;
  margin-left: 10px;
  text-decoration: none;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
