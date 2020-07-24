<template>
  <div>
    {{ message }} <br />
    <PokemonSelector> </PokemonSelector>
    {{ pokemon }}
  </div>
</template>

<script>
import Axios from 'axios';
import PokemonSelector from '@/components/PokemonSelector.vue';
export default {
  components: {
    PokemonSelector,
  },
  props: {
    message: String,
  },
  data() {
    return {
      pokemon: null,
    };
  },
  async created() {
    const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    this.pokemon = response.data;
  },
};
</script>
