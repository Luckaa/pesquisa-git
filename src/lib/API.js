const API_URL = "http://localhost:3000/";
import axios from 'axios';

export default {

  //Livros

  getLivros() {
    return fetch(API_URL + "livros")
      .then(response => response.json(0))
  },

  deletarLivros(livro) {

    return axios.delete(API_URL + "livros", {
        data: livro
      })
      .then(response => response.data)
  },

  adicionarLivros(livro) {
    return axios.post(API_URL + "livros", livro)
      .then(response => response.data)
  },

}
