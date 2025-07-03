<template>
    <aside class="container-sidebar">
        <article class="cont-logo">
            <logoDashboard></logoDashboard>
        </article>
        <section class="section-nav-dashboard">
            <navDashboard></navDashboard>
        </section>
        <section class="section-settings">
            <navSettings></navSettings>
        </section>
    </aside>
</template>

<script setup>
import logoDashboard from '@/modules/dashboard/components/UiDashboard/logoDashboard.vue';
import navDashboard from '@/modules/dashboard/components/UiDashboard/navDashboard.vue';
import navSettings from '@/modules/dashboard/components/UiDashboard/navSettings.vue';



</script>

<style scoped>

.container-sidebar {
    background-color: black; /* 04471be9*/
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    /* gap: 20px; */
}

.section-nav-dashboard {
    position: relative;
    width: 100%;
    /* margin-top: -70px; */
}

.section-settings {
    position: relative;
    margin-top: 260px;
    width: 100%;
}

</style>