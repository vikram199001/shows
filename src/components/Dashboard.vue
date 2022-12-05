<template>
    <div>
        <Header :handleSearch="filterBySearch"/>
        <div class="container-fluid homepage-theme p-0 mx-md-auto">
            <div class="row" style="margin: auto;">
                <div class="col-md-12 p-0">
                    <div> 
                        <div class="container-fluid p-5">
                            <div class="row shows-section pb-5" style="margin: 0 auto;">
                                <ShowList :shows="filterShows" :categorizedShows="categorizedData"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { getShows } from '../services';
import ShowList from './ShowList.vue';
import Header from './Header.vue';
export default {
    name: "dash-board",
    components: {
        ShowList,
        Header,
    },
    data(){
        return {
            shows: [],
            filterShows: [],
            categories: ['Science-Fiction', 'Drama', 'Action', 'Triller'],
            categorizedData:{},
            originalCategorizedData: {}
        }
    },
    methods: {
        async getAllShows(){
            let shows = await getShows();
            this.shows = shows.data;
            this.filterShows = this.shows;
            this.sortCategories();

        },
        sortCategories(){
           this.shows.forEach((s) => {
                if(s.genres.includes('Science-Fiction')) {
                    if(!this.categorizedData['Science-Fiction'])
                        this.categorizedData['Science-Fiction'] = [s]
                    else this.categorizedData['Science-Fiction'].push(s);
                }
                if(s.genres.includes('Drama')) {
                    if(!this.categorizedData['Drama'])
                        this.categorizedData['Drama'] = [s]
                    else this.categorizedData['Drama'].push(s);
                }
                if(s.genres.includes('Action')) {
                    if(!this.categorizedData['Action'])
                        this.categorizedData['Action'] = [s]
                    else this.categorizedData['Action'].push(s);
                }
                if(s.genres.includes('Thriller')) {
                    if(!this.categorizedData['Thriller'])
                        this.categorizedData['Thriller'] = [s]
                    else this.categorizedData['Thriller'].push(s);
                }
                this.originalCategorizedData = this.categorizedData;
           })
        },
        filterBySearch(filterValue){
            if(filterValue){
                this.filterShows = this.shows.filter((s) => ((s.name).toLowerCase()).includes(filterValue.toLowerCase()))
                this.categorizedData = {[`Search result for ${filterValue}`]: this.filterShows};
            } else {
                this.categorizedData = this.originalCategorizedData;
            }
        },
    },
    mounted () {
        this.getAllShows();
  }
};
</script>
<style scoped>
.shows-section {
    height: 95vh;
    overflow: scroll;
}
::-webkit-scrollbar{
    display: none;
}
</style>