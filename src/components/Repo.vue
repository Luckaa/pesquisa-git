<template>
    <div class="card card-body-mb2">
        <div class="row">
            <div class="col-md-6">
                <a :href="repo.html_url" target="_blank">{{repo.name}}</a>
            </div>
            <div class="col-md-8 mt-3">
                <span class="badge badge-primary">Stars: {{repo.stargazers_count}}</span>
                <span class="badge badge-secondary">Watch: {{repo.watchers_count}}</span>
                <span class="badge badge-success">Forks: {{repo.forks_count}}</span>
                <span target="_blank" class="badge badge-danger">Linguagem: {{repo.language}}</span>
                <span @click="criarObj" class="badge badge-warning">Favoritar</span>

            </div>
        </div>
    </div>

</template>
<script>
const API_URL = "http://localhost:3000/"
import API from "../lib/API"
import axios from "axios";

export default {
    props:['repo'],
     methods:{
        criarObj(){
            let favorito = JSON

           favorito = JSON.stringify({
                nome:this.repo.name,
                usuario:this.repo.owner.login,
                linguagem:this.repo.language,
                url:this.repo.html_url
                })
 
            console.log(favorito)

        axios.post(API_URL + "favoritos", favorito.data)
        .then(data => {
          console.log(data);
          console.log("sucesso");
        })
        .catch(err => {
          console.log(err);
        });  
        }
    }
    
}
</script>