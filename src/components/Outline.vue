<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/aboutus">About Us</router-link>
          </li>
          <li>
            <router-link to="/contactus">Contact Us</router-link>
          </li>
          <li>
            <router-link :to="this.pokemonRouterLinkPath">Pokémon</router-link>
          </li>
          <li id="username">{{ username }}</li>
        </ul>
      </nav>
      <h1 id="zergifyTitle">Zergify</h1>
    </header>
    <slot></slot>
    <footer>
      ©Zergify 2020
      <br />1-800-555-ZERG
    </footer>
  </div>
</template>

<script>
export default {
  name: "WebpageOutline",
  props: {},
  computed: {
    username() {
      return this.$store.state.user?.user;
    },
    pokemonRouterLinkPath() {
      let pokemonId = this.$store.state.pokemonId;
      return "/pokemon/" + pokemonId;
    }
  }
};
</script>

<style scoped>
#username {
  display: right;
}
</style>
