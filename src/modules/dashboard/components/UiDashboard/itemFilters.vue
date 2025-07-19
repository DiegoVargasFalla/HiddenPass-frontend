<template>
    <div :class="{'filter-selected': isSelectedFilter}" class="filter"  @click="onClickFilter">
        <h3 class="filter-text">{{ name }}</h3>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useFilterStore } from '../../store/filterStore';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';


const filterStore = useFilterStore();
const isSelectedFilter = computed(()=> filterStore.selected === props.filterId);
// const numFilter = computed(() => filterStore.numFilter === props.num)
const authenticationStore = useAuthenticationStore();


const props = defineProps({
    name: String,
    bgColor: String,
    filterId: String,
    num: Number
})


const onClickFilter = () => {
    if (filterStore.selected != props.filterId) {

        if (props.num === 1) {
            filterStore.setIdElement(props.filterId);
            authenticationStore.setListPassword(authenticationStore.listRecentPasssword);
        }
        if (props.num === 2) {
            filterStore.setIdElement(props.filterId)
            authenticationStore.setListPassword(authenticationStore.listAlphabeticPassword);
        }
        else if(props.num === 3) {
            filterStore.setIdElement(props.filterId);
            authenticationStore.setListPassword(authenticationStore.listOldPassword);
        }
    }
    else {
        filterStore.clearSelected();
    }
    
}

</script>

<style scoped>

.filter {
    background-color: #16DB65;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    border-radius: 15px;
    padding: 0 8px;
    border: 1px solid rgba(5, 77, 3, 0.216);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

.filter:hover {
    transform: translateY(-3px);
    box-shadow:  
        0 3px 9px rgba(0, 0, 0, 0.503),
        inset 3px 3px 5px rgba(101, 101, 101, 0.474);
    /* background-color: #1DBb65; */
}

.filter-text {
    font-family: 'Inter';
    font-size: clamp(0.85rem, 1.4vw, 0.9rem);
    font-weight: 400;
    color: black;
}


.filter-selected {
    transform: translateY(-3px);
    box-shadow:  
        0 3px 9px rgba(0, 0, 0, 0.503),
        inset 3px 3px 5px rgba(101, 101, 101, 0.474);
    border: 1px solid #000000;
    background-color: #00ff51f5;
}

</style>