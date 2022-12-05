<template>
  <div>
    <router-view/>
</div>

</template>

<script>
import { ref } from 'vue';

const childComponent = ref(null);
export default {
  name: 'App',
  components: {
  },
  methods: {
    callHeaderSearch(value){
      childComponent.value.filterBySearch(value);
      // console.log('---callled', value, this.$childComponent.value.filterBySearch(value));
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
