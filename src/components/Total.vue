<template>
    <div>
        <div class="row">
            <div class="col-md-9">
                <div class="card" style="witdth: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Linguagem Selecionada: <span class="badge-success">{{tec.items[0].language}}</span></li>
                        <li class="list-group-item">Repositórios: <span class="badge-primary">{{tec.total_count}}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:["tec"]
        }
</script>