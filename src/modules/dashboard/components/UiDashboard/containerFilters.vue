<template>
    <div class="container-filters">
        <itemFilters
        v-for="(item, index) in listFilters"
        :key="index"
        :name="item.name"
        :bg-color="item.bgColor"
        :filter-id="item.id"
        :num="item.num"
        ></itemFilters>
    </div>
</template>

<script setup>
import itemFilters from './itemFilters.vue';


const listFilters = [
    {name: 'Recientes', bgColor: '#16DB65', id:'recentId', num: 1},
    {name: 'Orden alfabético', bgColor: '#16DB65', id:'alphabeticalId', num: 2},
    {name: 'Antiguas', bgColor: '#16DB65', id:'oldId', num: 3},
]
</script>

<style scoped>

.container-filters {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;
    width: 100%;
    /* padding-left: 35px; */
    gap: 10px;
}


</style>