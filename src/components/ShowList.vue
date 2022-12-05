<template>
    <div v-for="(category, i) in Object.keys(categorizedShows)" :key="i">
        <div class="d-flex justify-content-left heading"><h1>{{category}}</h1></div>
        
    <div class="show-row-grid">
        <div v-for="show in sortShows(categorizedShows[category])" :key="show.id">
            <ShowDetails :show=show />
        </div>

    </div>
    </div>
</template>
<script>
import ShowDetails from './Show.vue'
export default {
    name: "show-list",
    components: {
        ShowDetails,
    },
    props: ['shows', 'categorizedShows'],
    data(){
        return {
            data: []
        }
    },
    methods: {  
        sortShows(data){
            return data.sort((a, b) => a.rating.average - b.rating.average).slice(0, 10)
        }
    },
    mounted(){
        this.data = this.categorizedShows;
    }
};
</script>
<style scoped>
.show-row-grid {
    padding: 8px;
    padding-bottom: 15px;
    display: grid;
    gap: 40px;
    align-items: stretch;
    justify-items: stretch;
    width: 100%;
    overflow-x: hidden;
    grid-template-columns: repeat(5, 1fr);
}

.show-row-grid>.col.card>.card-body {
    /* display: flex; */
    /* flex-direction: column; */
    justify-content: space-between;
}

.heading {
    background: #e5e5e5;
    border-radius: 15px;
    padding-left: 15px;
    margin-bottom: 12px;
    font-style: oblique;
    color: #979797;
}
@media (max-width: 480px){
    .show-row-grid {
        padding: 8px;
    padding-bottom: 15px;
    display: grid;
    gap: 40px;
    align-items: stretch;
    justify-items: stretch;
    width: 100%;
    overflow-x: hidden;
    grid-template-columns: repeat(1, 1fr);
    }
    
}
</style>