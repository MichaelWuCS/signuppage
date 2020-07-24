<template>
  <div>
    <input
      id="inputbox"
      v-model="pokemonId"
      type="text"
      placeholder="Enter a Pokémon's name or pokédex number"
    />
    <br />
    <button type="button" @click="setPokemonId">Input!</button>
  </div>
</template>

<script>
export default {
  name: "PokemonSelector",
  data() {
    return {
      pokemonId: ""
    };
  },
  methods: {
    setPokemonId() {
      this.$store.dispatch("setPokemonIdAsync", this.pokemonId);
      this.$router.push({
        name: "pokemon",
        params: { pokemonId: this.pokemonId }
      });
    }
  }
};
</script>

<style scoped>
#inputbox {
  margin-bottom: 0px;
  max-width: 300px;
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px;
}
</style>