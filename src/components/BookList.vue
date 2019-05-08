<template>
  <div >
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

import GoogleBooksAPI from '../api/GoogleBooksAPI'

export default {
  name: 'BookList',
  data () {
    return {
      msg: 'BookList',
      query: ''
    }
  },
  created() {
    this.query = this.$route.query.q
  },
  async mounted() {
    const bookList = await GoogleBooksAPI.getVolumes(this.query)
    alert (bookList)
  }
}
</script>

<style>
</style>
