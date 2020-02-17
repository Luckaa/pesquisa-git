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

export default {
    
    favorito:{},
    props:["reposTec"]
    ,
    
    methods:{
        criarObj(){
            let favorito = []
            let nomeSelecionado = this.reposTec.name
            let autorSelecionado = this.reposTec.owner.login
            let linguagemSelecionado = this.reposTec.language
            favorito.push(nomeSelecionado,autorSelecionado,linguagemSelecionado)
            console.log(favorito)
        }
    }
    
}
</script>