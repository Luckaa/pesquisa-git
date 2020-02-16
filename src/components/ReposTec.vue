<template>
    <div class="card card-body-mb2">
        <div class="row">
            <div class="col-md-6">
                <a :href="reposTec.html_url" target="_blank">{{reposTec.name}}</a>
            </div>
            <div class="col-md-8 mt-3">
                <a  :href="reposTec.owner.html_url" target="_blank" class="badge badge-primary">Autor: {{reposTec.owner.login}}</a>
                <a  target="_blank" class="badge badge-success">Linguagem: {{reposTec.language}}</a>
                <a  href="" target="_blank" class="badge badge-warning">Favoritar</a>
                

            </div>
     
        </div>
    </div>

</template>
<script>
export default {
    props:['reposTec']
    
}
</script>