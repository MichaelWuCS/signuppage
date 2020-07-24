<template>
  <div id="app">
    <outline>
      <router-view></router-view>
    </outline>
  </div>
</template>

<script>
import Outline from './components/Outline.vue';

export default {
  name: 'App',
  components: {
    Outline,
  },
};
</script>
