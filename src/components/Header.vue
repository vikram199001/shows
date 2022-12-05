<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">TopShows</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <div class="d-flex">
          <b-form-input size="sm" class="mr-sm-2" v-model="searchValue" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0 mx-2" type="submit" @click="submitSearch" >{{this.buttonLbl}}</b-button>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header-component',
  props: {
    handleSearch: {
        type: Function,
       
    }
  },
  data() {
    return {
        searchValue: "",
        buttonLbl: 'search'
    }
  },
  methods: {
    submitSearch(){
        if(this.buttonLbl == 'search') this.buttonLbl = 'clear';
        else if(this.buttonLbl == 'clear') {
            this.buttonLbl = 'search';
            this.searchValue = "";
        }
        this.handleSearch(this.searchValue);
    }
  }
};
</script>
<style scoped>
.bg-info {
    background-color: #c1c1c1 !important;
}
</style>