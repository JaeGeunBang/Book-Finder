<template>
  <div >
    <input v-model="query" placeholder="Query">
    <router-link :to="'/BookList?q=' + query" >
      <button > 조회 </button>
    </router-link>
    <div>
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      query: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
