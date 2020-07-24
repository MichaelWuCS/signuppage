<template>
  <section id="content_holder">
    <div id="content_divider_text">
      <strong>
        Protoss Too OP? A-moving makes you mad? Join Zergify!
        <br />Zergify is a community of millions of players who simply
        <br />complain about the balance of the game.
        <br />
        <img src="../assets/cuteZerg.jpg" width="200" height="100" />
        <br />Join the Hivemind today! Registering is as simple as
        <br />letting
        your consciousness be assimilated into an
        <br />overlord's brain.
        <br />
      </strong>
    </div>
    <div id="content_divider">
      <img src="../assets/happyZerg.jpg" />
      <PokemonSelector></PokemonSelector>
    </div>
    <div id="content_divider">
      <br />
      <img id="logo" alt="Zergify Logo" src="../assets/zergLogo.jpg" />
      ZERGIFY
      <br />
      <br />
      <register></register>
    </div>
  </section>
</template>

<script>
import Register from "../components/Register.vue";
import PokemonSelector from "../components/PokemonSelector.vue";

export default {
  name: "Home",
  components: {
    Register,
    PokemonSelector
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  width: 5%;
  height: 5%;
}

header {
  background: rgb(36, 5, 36);
  background-image: url("../assets/zergBackground3.jpg");
  background-size: 100%;
  padding: 20px;
  height: auto;
  height: 100px;
  max-width: 100%;
}

body {
  margin: 0;
  padding: 0;
}

#content_divider {
  display: inline-block;
  width: 300px;
  margin: auto;
}

#content_holder {
  display: flex;
  flex-direction: row;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 0 20px 0 0;
  color: white;
}

footer {
  background: rgb(34, 1, 49);
  height: 50px;
  color: white;
  text-align: left;
}

#zergifyTitle {
  color: white;
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

nav {
  text-align: left;
}

#content_divider_text {
  color: purple;
  text-align: left;
  font-family: "Times New Roman", Times, serif;
  padding: 20px;
}
</style>
