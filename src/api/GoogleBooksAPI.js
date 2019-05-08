import axios from 'axios'

export default {
  async getVolumes (query){
    return await axios.get("https://www.googleapis.com/books/v1/volumes", {
      params: {
        q: query
      }
    })
  }
}
