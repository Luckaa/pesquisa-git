<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <div class="card card-body">
        <h1>Pesquisar repositorios</h1>
        <p class="lead">digite o nome do repositorio que você deseja</p>
        <input @keyup="getUser" class="form-control" id="search" type="text" required>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from'./components/Navbar.vue';
import axios from "axios";

export default {
  name: 'App',
  data(){
    return{
      github:{
        url:'https://api.github.com/users',
        client_id:'40a57736385abed0fc27',
        client_secret:'7d5ef09a9c9c8b5b22d1d17c5b4afcc5f38224d1',
        count: 7,
        sort:'created: asc'
      },
      user:[],
      repos:[]
    }
  },
  components:{
    Navbar
  },
  methods:{
    getUser(e){
      const user = e.target.value;
      const {url,client_id,client_secret,count,sort} = this.github
      axios.get(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`) 
      .then(({data})=>this.user = console.log(data))
    }
  }
}
</script>


