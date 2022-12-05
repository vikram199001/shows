<template>
    <div>
        <div v-if="!showDetails">loading</div>
        <div v-else class="container-fluid mt-5">
            <b-card  :v-if="showDetails" :img-src="showDetails.image.original" img-alt="Card image" img-left class="mb-3 show-img">
                <div class="text-left">
                    <h1>{{showDetails.name}}</h1>
                    <div class="align-items-center subdetails">
                        <p class="text-left"><strong>Genre:</strong> {{showDetails.genres.join(',')}}</p>
                        <p class="text-left"><strong>Language:</strong> {{showDetails.language}}</p>
                        <p><strong>Premiered On:</strong> {{showDetails.premiered}}</p>
                        <p><strong>Rating:</strong> {{showDetails.rating.average}}</p>
                        <p><strong>Genre:</strong> {{showDetails.genres.join(',')}}</p>
                        <strong>Summary:</strong> <div v-html="showDetails.summary"></div>
                    </div>
                    
                </div>
            </b-card>
        </div>
    </div>

      
  </template>
  
  <script>
  import { getShow } from '../services';
  export default {
    name: 'show-details',
    props: {
      msg: String
    },
    data() {
        return {
            showDetails: null,
        }
    },
    methods: {
        async getShowDetails(id){
            let response = await getShow(id);
            this.showDetails = response.data;
            console.log('--s', response.data)


        }
    },
     mounted(){
        let id  = this.$route.params.id;
        this.getShowDetails(id);
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .subdetails {
    text-align: left;
  }
  .show-img {
    height: max-content;
    max-height: 95vh;
    width: 100%;
    background: #ededed;
    border: 1px solid grey;
  }
  @media (max-width: 480px) {
.show-img{
    display: block;
}
  }
  </style>
  