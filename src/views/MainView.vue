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
        <floatingSidebar v-if="showSlideBar">
            <template #logo>
                <logoDashboard></logoDashboard>
            </template>
            <template #item-1>
                <linksNav lable="Acerca de" link="#sec-about" :colorText=ColorText></linksNav>
            </template>
            <template #item-2>
                <linksNav lable="Guia de uso" link="#sec-use-guide" :colorText=ColorText></linksNav>
            </template>
            <template #item-3>
                <linksNav lable="Planes" link="#sec-plans"  :colorText=ColorText></linksNav>
            </template>
            <template #item-4>
                <linksNav lable="Contacto" link="#contact-section" :colorText=ColorText></linksNav>
            </template>
            <template #button-1>
                <buttons 
                label="Iniciar sesion" 
                link="/login"
                :textColor=ColorText
                colorBorder="black" 
                boxShadowColor="rgba(157, 154, 154, 0.27)"
                ></buttons>
            </template>
            <template #button-2>
                <buttons label="Registrarse" 
                link="/register"
                bgColor="black"
                textColor="white"
                boxShadowColor="rgba(157, 154, 154, 0.27)"
                ></buttons>
            </template>
        </floatingSidebar>
        <defaultLayout v-if="!hiddeSection"></defaultLayout>
        <RouterView v-if="hiddeSection" class="router-link"></RouterView>
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
import floatingSidebar from '@/modules/dashboard/components/UiDashboard/SlideBar.vue';
import linksNav from '@/components/UI/linksNav.vue';
import buttons from '@/components/UI/buttons.vue';
import logoDashboard from '@/modules/dashboard/components/UiDashboard/logoDashboard.vue';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';


const router = useRouter();
const route = useRoute();
const authenticationStore = useAuthenticationStore();


const showSlideBar = computed(() => authenticationStore.showSlideBar);

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

.router-link {
    height: 100%;
    width: 100%;
}

</style>