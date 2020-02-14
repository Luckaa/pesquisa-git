<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <div class="card card-body">
        <h1>Pesquisar repositorios</h1>
        <p class="lead">digite o nome do repositorio que você deseja</p>
        <input class="form-control" id="search" type="text" required>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from'./components/Navbar.vue';

export default {
  name: 'App',
  data(){
    return{
      github:{
        url:'',
        client_id:'',
        client_secret:'',
        count: 7,
        sort:'created: asc'
      }
    }
  },
  components:{
    Navbar
  }
}
</script>


