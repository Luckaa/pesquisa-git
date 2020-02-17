
<template>
  <div id="app">
        <div>
      <h5 class="bg-red">Pesquisar por  <a @click="determinarUser"  href="#">Usuarios</a> ou 
    <a @click="determinarTec"  href="#">Tecnologias</a></h5>
  

    <h5>Lista de  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Favoritos</a></h5>

    <div v-if="visibilidadeUser !== false" class="card card-body">
          <h1>Usuarios</h1>
          <p class="lead">digite o nome do usuario que você deseja pesquisar</p>
          <input @keyup="getUser" class="form-control" id="search" type="text" required>
        </div>

          <div v-if="visibilidadeTec !== false" class="card card-body">
          <h1>Tecnologias</h1>
          <p class="lead">digite o nome da tecnologia que você deseja pesquisar</p>
            <input @keyup="getTec" class="form-control" id="searc" type="text" required>
     
          </div>
     
    </div>

    <div class="row mt-1">


      

  <div  v-if="user.length !== 0" class="row mt-9"> 
    <div class="col-md-4">
      <profile :user="user"/>
    </div>

    <div class="col-md-7">
      <Repo v-for="repo in repos" :key="repo" :repo="repo"/>
    </div>

    
    </div>
    <div  v-if="tec.length !== 0" class="row mt-6"> 
    <div class="col-md-3">
      <Total :tec="tec"/>
    </div>

    <div class="col-md-9">
      <ReposTec v-for="reposTec in reposTec" :key="reposTec" :reposTec="reposTec"/>
      <button  class="btn btn-info" @click="proximaPag">Proxima Página</button>
    </div>
    </div>


    </div>
  </div>
</template>
<script>
import Profile from'./components/Profile.vue';
import ReposTec from'./components/ReposTec.vue';
import Repo from'./components/Repo.vue';
import Total from'./components/Total.vue';


import axios from "axios";
import API from "./lib/API";

const API_URL = "http://localhost:3000/"
var visibilidadeTec = 0
var visibilidadeUser = 0

export default {
   mounted() {

  },
  name: 'App',
  data(){
    return{
      

      github:{
        urlTec:"https://api.github.com" ,
        urlUser:'https://api.github.com/users',
        client_id:'40a57736385abed0fc27',
        client_secret:'7d5ef09a9c9c8b5b22d1d17c5b4afcc5f38224d1',
        count: 1000,
        sort:'created: asc'
      },
      user:[],
      tec:[],
      reposTec:[],
      repos:[],
      pag: 1,
      tecEscolhida:"",
      visibilidadeUser:false,
      visibilidadeTec:false,
    }
  },
  components:{
    Profile,
    Repo,
    Total,
    ReposTec
    
  },
  methods:{
    getUser(e){
      const user = e.target.value;
      const {urlUser,client_id,client_secret,count,sort} = this.github

      axios.get(`${urlUser}/${user}?client_id=${client_id}&client_secret=${client_secret}`) 
      .then(({data})=>this.user = (this.user = data))

      axios.get(`${urlUser}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`)
      .then(({data})=> this.repos = data)
    },
    proximaPag(e){
      const proximaPag = this.pag++
      const tec = e.target.value;
      const {pag,urlTec,client_id,client_secret} = this.github

      axios.get(`${urlTec}/search/repositories?q=language:${this.tecEscolhida}&sort=stars&page=${proximaPag}&client_id=${client_id}&client_secret=${client_secret}`) 
      .then(({data})=>this.reposTec = data.items)
      },
    getTec(e){
      const tec = e.target.value;
      const {pag,urlTec,client_id,client_secret} = this.github
      this.tecEscolhida = tec

      axios.get(`${urlTec}/search/repositories?q=language:${tec}&sort=stars&page=1&client_id=${client_id}&client_secret=${client_secret}`) 
      .then(({data})=>this.tec = (this.tec = data))
      console.log(tec)
      
      axios.get(`${urlTec}/search/repositories?q=language:${tec}&sort=stars&page=${pag}&client_id=${client_id}&client_secret=${client_secret}`) 
      .then(({data})=>this.reposTec = data.items)

    },
    determinarUser(){
      this.visibilidadeUser = true
      this.visibilidadeTec = false
      console.log(visibilidadeUser,visibilidadeTec)
    },
      determinarTec(){
      this.visibilidadeTec = true
      this.visibilidadeUser = false
      console.log(visibilidadeTec,visibilidadeUser)
    }
    
  }
  }

</script>




