const API_URL = "http://localhost:3000/";
import axios from 'axios';

export default {

  //favs

  getFavoritos() {
    return fetch(API_URL + "favs")
      .then(response => response.json(0))
  },

  deletarFavoritos(fav) {

    return axios.delete(API_URL + "favs", {
        data: fav
      })
      .then(response => response.data)
  },

  adicionarFavoritos(fav) {
    return axios.post(API_URL + "favs", fav)
      .then(response => response.data)
  },

}
