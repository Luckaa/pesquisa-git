<template>
    <div class="card card-body-mb2">
        <div class="row">
            <div class="col-md-6">
                <a :href="reposTec.html_url" target="_blank">{{reposTec.name}}</a>
            </div>
            <div class="col-md-6 mt-3">
                <a  :href="reposTec.owner.html_url" target="_blank" class="badge badge-success">Autor: {{reposTec.owner.login}}</a>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    props:['reposTec']
    
}
</script>