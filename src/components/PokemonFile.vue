<template>
  <div>
    <section>
      <div id="pokemonSpriteBlock" class="contentBlock" :style="{backgroundColor: backgroundColor}">
        <br />
        <img id="pokemonSprite" :src="this.pokemonSprite" />
        <br />
        <br />
      </div>
      <br />
      <div id="pokemonInfo" class="contentBlock">
        National Pokédex Number: {{this.nationalPokedexNum}}
        <br />
        Pokémon Name: {{this.pokemonName}}
        <br />
        <br />
        Ability 1: {{this.pokemonAbility1}}
        <br />
        {{this.abilityDescription1}}
        <br />
        <br />
        Ability 2 : {{this.pokemonAbility2}}
        <br />
        <br />
        {{this.abilityDescription2}}
        <br />
        Hidden Ability: {{this.pokemonAbility3}}
        <br />
        {{this.abilityDescription3}}
        <br />
        <br />
        Type: {{this.pokemonType1}} {{this.pokemonType2}}
        <p>{{this.flavorText}}</p>
      </div>
      <br />
      <div id="pokemonStats" class="contentBlock">
        Base Stats
        <br />
        HP: {{this.hpStat}}
        <br />
        Atk: {{this.attackStat}}
        <br />
        Def: {{this.defenseStat}}
        <br />
        SAtk: {{this.specialAttackStat}}
        <br />
        SDef: {{this.specialDefenseStat}}
        <br />
        Spd: {{this.speedStat}}
        <br />
        Base Stat Total: {{this.BST}}
      </div>
      <br />
      <div>
        <pokemon-selector></pokemon-selector>
      </div>
      <br />
    </section>
  </div>
</template>

<script>
import { upperCaseFirstLetter } from "@/utils/stringManipulation.js";

import Axios from "axios";
import PokemonSelector from "../components/PokemonSelector.vue";
export default {
  components: {
    PokemonSelector
  },
  props: {
    pokemonId: String
  },
  data() {
    return {
      pokemon: null,
      species: null,
      ability1: null,
      ability2: null,
      ability3: null,
      threeAbilities: false
    };
  },
  async created() {},
  watch: {
    pokemonId: {
      async handler(pokemonId) {
        // Gets the Pokemon
        let pokeapiurl = "https://pokeapi.co/api/v2/pokemon/" + pokemonId;
        const response = await Axios.get(pokeapiurl);
        this.pokemon = response.data;

        // Gets Pokemon flavor text
        let pokeapiurlSpecies = this.pokemon.species.url;
        const responseSpecies = await Axios.get(pokeapiurlSpecies);
        this.species = responseSpecies.data;

        // Gets ability 1 description
        let pokeapiurlAbility1 = this.pokemon.abilities[0].ability.url;
        const responseAbility1 = await Axios.get(pokeapiurlAbility1);
        this.ability1 = responseAbility1.data;

        // Gets ability 2 description (if it exists)
        try {
          let pokeapiurlAbility2 = this.pokemon.abilities[1].ability.url;
          const responseAbility2 = await Axios.get(pokeapiurlAbility2);
          this.ability2 = responseAbility2.data;
        } catch (error) {
          // Do nothing
        }

        // Gets ability 3 description/Hidden ability (if it exists)
        try {
          let pokeapiurlAbility3 = this.pokemon.abilities[2].ability.url;
          const responseAbility3 = await Axios.get(pokeapiurlAbility3);
          this.ability3 = responseAbility3.data;
          this.threeAbilities = true;
        } catch (error) {
          // If there are 2 abilities, the second ability is considered a hidden ability
          // If there is only one ability, it will still show none as a hidden ability
        }

        this.setColorToPokemonType();
      },
      immediate: true
    }
  },
  computed: {
    backgroundColor() {
      return this.getPokemonTypeColor(this.pokemon?.types[0]?.type?.name);
    },
    pokemonName() {
      try {
        return upperCaseFirstLetter(this.pokemon?.species?.name);
      } catch (error) {
        return "";
      }
    },
    pokemonType1() {
      try {
        return upperCaseFirstLetter(this.pokemon.types[0].type.name);
      } catch (error) {
        return "";
      }
    },
    pokemonType2() {
      try {
        return upperCaseFirstLetter(this.pokemon.types[1].type.name);
      } catch (error) {
        return "";
      }
    },
    pokemonAbility1() {
      try {
        return upperCaseFirstLetter(this.pokemon.abilities[0].ability.name);
      } catch (error) {
        return "";
      }
    },
    pokemonAbility2() {
      try {
        if (this.threeAbilities) {
          return upperCaseFirstLetter(this.pokemon.abilities[1].ability.name);
        }
        return "None";
      } catch (error) {
        return "None";
      }
    },
    pokemonAbility3() {
      try {
        if (this.threeAbilities) {
          return upperCaseFirstLetter(this.pokemon.abilities[2].ability.name);
        }
        return upperCaseFirstLetter(this.pokemon.abilities[1].ability.name);
      } catch (error) {
        return "None";
      }
    },
    pokemonSprite() {
      try {
        return this.pokemon.sprites.front_default;
      } catch (error) {
        return null;
      }
    },
    nationalPokedexNum() {
      try {
        return this.pokemon.id;
      } catch (error) {
        return "";
      }
    },
    flavorText() {
      try {
        let englishFlavorText = "";
        let flavorTextArray = this.species.flavor_text_entries;
        for (let i = 0; i < flavorTextArray.length; i++) {
          if (flavorTextArray[i].language.name === "en") {
            englishFlavorText = flavorTextArray[i].flavor_text;
          }
        }
        return englishFlavorText;
      } catch (error) {
        return "";
      }
    },
    abilityDescription1() {
      try {
        let englishDescription = "";
        let descriptionArray = this.ability1.effect_entries;
        for (let i = 0; i < descriptionArray.length; i++) {
          if (descriptionArray[i].language.name === "en") {
            englishDescription = descriptionArray[i].effect;
          }
        }
        return englishDescription;
      } catch (error) {
        return "";
      }
    },
    abilityDescription2() {
      try {
        if (this.threeAbilities) {
          let englishDescription = "";
          let descriptionArray = this.ability2.effect_entries;
          for (let i = 0; i < descriptionArray.length; i++) {
            if (descriptionArray[i].language.name === "en") {
              englishDescription = descriptionArray[i].effect;
            }
          }
          return englishDescription;
        }
        return "";
      } catch (error) {
        return "";
      }
    },
    abilityDescription3() {
      try {
        let englishDescription = "";
        let descriptionArray = this.ability2.effect_entries;
        if (this.threeAbilities) {
          descriptionArray = this.ability3.effect_entries;
        }
        for (let i = 0; i < descriptionArray.length; i++) {
          if (descriptionArray[i].language.name === "en") {
            englishDescription = descriptionArray[i].effect;
          }
        }
        return englishDescription;
      } catch (error) {
        return "";
      }
    },
    hpStat() {
      try {
        return this.pokemon.stats[0].base_stat;
      } catch (error) {
        return "";
      }
    },
    attackStat() {
      try {
        return this.pokemon.stats[1].base_stat;
      } catch (error) {
        return "";
      }
    },
    defenseStat() {
      try {
        return this.pokemon.stats[2].base_stat;
      } catch (error) {
        return "";
      }
    },
    specialAttackStat() {
      try {
        return this.pokemon.stats[3].base_stat;
      } catch (error) {
        return "";
      }
    },
    specialDefenseStat() {
      try {
        return this.pokemon.stats[4].base_stat;
      } catch (error) {
        return "";
      }
    },
    speedStat() {
      try {
        return this.pokemon.stats[5].base_stat;
      } catch (error) {
        return "";
      }
    },
    BST() {
      try {
        return (
          this.hpStat +
          this.attackStat +
          this.defenseStat +
          this.specialAttackStat +
          this.specialDefenseStat +
          this.speedStat
        );
      } catch (error) {
        return "";
      }
    }
  },
  methods: {
    getPokemonTypeColor(type) {
      switch (type) {
        case "normal":
          return "aliceblue";
        case "grass":
          return "limegreen";
        case "fire":
          return "coral";
        case "water":
          return "aqua";
        case "fighting":
          return "brown";
        case "flying":
          return "cornflowerblue";
        case "poison":
          return "darkviolet";
        case "ground":
          return "moccasin";
        case "rock":
          return "burlywood";
        case "bug":
          return "lightgreen";
        case "ghost":
          return "darkorchid";
        case "electric":
          return "yellow";
        case "psychic":
          return "orchid";
        case "ice":
          return "powderblue";
        case "dragon":
          return "blueviolet";
        case "dark":
          return "slategray";
        case "steel":
          return "silver";
        case "fairy":
          return "pink";
      }
    },
    setColorToPokemonType() {
      let background = document.getElementById("pokemonSpriteBlock");

      background.style.backgroundColor = this.getPokemonTypeColor(
        this.pokemon.types[0].type.name
      );
    }
  }
};
</script>

<style scoped>
.contentBlock {
  flex-direction: row;
}

#pokemonSprite {
  height: 25%;
  width: 25%;
  background-color: whitesmoke;
  border-radius: 20px;
}
#pokemonInfo {
  text-align: left;
  background-color: azure;
  border-radius: 20px;
  padding: 20px;
}

#pokemonStats {
  text-align: left;
  background-color: azure;
  border-radius: 20px;
  padding: 20px;
}
</style>
