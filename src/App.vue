<template>
  <div id="app">
    <Navbar/>

    <div class="container">


        <div class="card card-body">
          <h1>Usuarios</h1>
          <p class="lead">digite o nome do Usuario que você deseja pesquisar</p>
          <input @keyup="getUser" class="form-control" id="search" type="text" required>
        </div>

  <div  v-if="user.length !== 0" class="row mt-3"> 
    <div class="col-md-4">
      <profile :user="user"/>
    </div>

    <div class="col-md-8">
      <Repo v-for="repo in repos" :key="repo" :repo="repo"/>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from'./components/Navbar.vue';
import Profile from'./components/Profile.vue';
import Repo from'./components/Repo.vue';


import axios from "axios";


export default {
  name: 'App',
  data(){
    return{
      github:{
        url:'https://api.github.com/users',
        client_id:'40a57736385abed0fc27',
        client_secret:'7d5ef09a9c9c8b5b22d1d17c5b4afcc5f38224d1',
        count: 1000,
        sort:'created: asc'
      },
      user:[],
      repos:[]
    }
  },
  components:{
    Navbar,
    Profile,
    Repo
    
  },
  methods:{
    getUser(e){
      const user = e.target.value;
      const {url,client_id,client_secret,count,sort} = this.github

      axios.get(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`) 
      .then(({data})=>this.user = (this.user = data))

      axios.get(`${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`)
      .then(({data})=> this.repos = data)
    }
   
  }
}
</script>


