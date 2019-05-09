<template>
  <div >
    <h1> {{ msg }} </h1>
    <div v-if="dataReady">
      <div v-for="book in books">
        Title: {{ book.volumeInfo.title }} <br>
        Authors: {{ book.volumeInfo.authors }} <br>
        PublishedDate: {{ book.volumeInfo.publishedDate }} <br>
        <img :src= "book.volumeInfo.imageLinks.thumbnail" > <br>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>

import GoogleBooksAPI from '../api/GoogleBooksAPI'

export default {
  name: 'BookList',
  data () {
    return {
      msg: 'BookList',
      query: '',
      dataReady: false,
      books: []
    }
  },
  created() {
    this.query = this.$route.query.q
  },
  async mounted() {
    const bookList = await GoogleBooksAPI.getVolumes(this.query)
    this.books = bookList.data.items
    this.dataReady = true
  }
}
</script>

<style>
</style>
