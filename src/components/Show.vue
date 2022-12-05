<template>
    <div class="col">
        <b-card
            :title="show.name"
            :img-src="show.image.medium"
            img-alt="Image"
            img-top
            style="max-width: 20rem;"
            class="mb-2 show-img"
        >
        <b-card-text class="summary">
            <span v-html="show.summary"></span>
        </b-card-text>

        <b-button href="#" variant="primary">
            <router-link :to="`/show/${show.id}`" class="view-more">View more</router-link>
        </b-button>
        </b-card>
    </div>
    <!-- </router-link> -->
</template>
<script>
export default {
    name: "show-component",
    props: ["show"]
};
</script>
<style scoped>
.view-more {
    color: #fff;
    text-decoration: none;
}
.summary {
    height: 200px;
    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis;

}
.show-img img, .card-img-top{
    height: 250px !important;
}
</style>