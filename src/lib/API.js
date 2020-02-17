const API_URL = "http://localhost:3000/";
import axios from 'axios';

export default {

  //favoritos

  getFavoritos() {
    return fetch(API_URL + "favoritos")
      .then(response => response.json(0))
  },

  deletarFavoritos(favorito) {

    return axios.delete(API_URL + "favoritos", {
        data: fav
      })
      .then(response => response.data)
  },

  adicionarFavoritos(favorito) {
    return axios.post(API_URL + "favoritos", favorito)
      .then(response => response.data)
  },

}
