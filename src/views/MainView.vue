<template>
    <div class="container-all-content">
        <loaderTemplate v-if="load.load"></loaderTemplate>
        <Header
            v-if="!hiddeSection"
            link-about="#sec-about" 
            linkGuide="#sec-use-guide" 
            linkPlans="#sec-plans"
            linkContact="#contact-section"
        ></Header>
        <defaultLayout v-if="!hiddeSection"></defaultLayout>
        <RouterView v-if="hiddeSection"></RouterView>
        <Footer v-if="hiddenFooter"></Footer>
        <layerPopsUp v-if="showPopUpNewPassword"></layerPopsUp>
    </div>
</template>

<script setup>
import Header from '@/components/Layout/Header.vue';
import defaultLayout from '@/modules/landingPage/views/defaultLayout.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import loaderTemplate from '@/modules/loading/views/loaderTemplate.vue';
import { useLoaderStore } from '@/modules/loading/store/loadingStore';
import Footer from '@/components/Layout/footer.vue';
import layerPopsUp from '@/modules/dashboard/components/UiDashboard/layerPopsUp.vue';
import { useShowLayerPopsUp } from '@/modules/dashboard/store/layerPopsUpStore';

const router = useRouter();
const route = useRoute();
const hiddeSection = computed(() => 
    route.path === '/login'
    || route.path === '/register' 
    || route.path === '/TyC' 
    || route.path === '/policies'
    || route.path === '/dashboard'
);

const hiddenFooter = computed(() => route.path != '/dashboard');

const load = useLoaderStore();
router.beforeEach((to, from, next) => {
    load.startLoading()
    next();
});

router.afterEach(() => {
    load.stopLoading();
})


const showLayerPopsUp = useShowLayerPopsUp();
const showPopUpNewPassword = computed(() => showLayerPopsUp.getShowLayerPopsUp());

</script>

<style scoped>

.container-all-content {
    position: relative;
    /* background-color: red; */
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    align-items: center;
}

</style>