<template>
    <div class="container-show-dashboard">
        <keep-alive v-if="proofComponent">
            <component v-bind:is="currenteTabComponent"></component>
        </keep-alive>
    </div>
</template>

<script setup>
import { useNavStore } from '@/modules/dashboard/store/navStore';
import { computed, defineAsyncComponent } from 'vue';

const navStore =  useNavStore();

const  componentsMap = {
    Passwords: defineAsyncComponent(() => import('@/modules/dashboard/components/passwords.vue')),
    Security: defineAsyncComponent(() => import('@/modules/dashboard/components/security.vue')),
    Settings: defineAsyncComponent(() => import('@/modules/dashboard/components/Setting.vue'))
}

const currenteTabComponent = computed(() => componentsMap[navStore.section]);
const proofComponent = true;

</script>

<style scoped>

.container-show-dashboard {
    /* background: url('@/assets/img/bgrounPass2.png'); */
    /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
    /* background-color: blue; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 15px;
    overflow: hidden;
}

/* @media screen and (max-width: 1000px) {
    .container-show-dashboard {
        padding: 0;
    }
} */


</style>