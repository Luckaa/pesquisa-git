<template>
    <div class="card card-body-mb2">
        <div  ref="favorito" class="row">
            <div class="col-md-6">
                <a id="nome" :href="reposTec.html_url" target="_blank">{{reposTec.name}}</a>
            </div>
            <div class="col-md-7 mt-3">
                <a id="autor" :href="reposTec.owner.html_url" target="_blank" class="badge badge-primary">{{reposTec.owner.login}}</a>
                <a id="linguagem" target="_blank" class="badge badge-success">{{reposTec.language}}</a>
                <a @click="criarObj" target="_blank" class="badge badge-warning">Favoritar</a>
            </div>
        </div>
    </div>

</template>
<script>

const API_URL = "http://localhost:3000/"
import API from "../lib/API"
import axios from "axios";
export default {
    
    favorito:{},
    props:["reposTec"]
    ,
    
    methods:{
        criarObj(){

        let favoritoCompleto = JSON.stringify({
                nome:this.reposTec.name,
                usuario:this.reposTec.owner.login,
                linguagem:this.reposTec.language,
                url:this.reposTec.html_url})
                


 
            console.log(favoritoCompleto)

        axios.post(API_URL + "favoritos", favoritoCompleto)
        .then(res => {
          console.log(res);
          console.log("sucesso");
        })
        .catch(err => {
          console.log(err);
        });  
        }
    }
    
}
</script>