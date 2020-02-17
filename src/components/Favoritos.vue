<template>
    <div class="card card-body-mb2">
        <div class="row">
            <div class="col-md-6">
                <a :href="repo.html_url" target="_blank">{{}}</a>
            </div>
            <div class="col-md-8 mt-3">
                <span class="badge badge-primary">{{}}</span>
                <span class="badge badge-secondary">Watch: {{}}</span>
                <span class="badge badge-success">Forks: {{}}</span>
                <span target="_blank" class="badge badge-danger">Linguagem: {{}}</span>
                <span class="badge badge-warning">Favoritar</span>


            </div>
        </div>
    </div>

</template>
<script>
const API_URL = "http://localhost:3000/"
import API from "./lib/API";
export default {
    props:[''],
    
    methods:{
    
}
    
}

</script>