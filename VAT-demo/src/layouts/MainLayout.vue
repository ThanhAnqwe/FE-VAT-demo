<template>
    <div class="main-layout">
        <!--Page header-->
        <PageHeader/>

        <!--FilterBar-->
        <FilterBar/>

        <!--NavBar-->
        <NavBar/>

        <div >
        </div>
    </div>
</template>

<script setup>
import NavBar from './components/layout/NavBar.vue'
import FilterBar from './components/layout/FilterBar.vue'
import PageHeader from './components/layout/PageHeader.vue'
import ChatBot from './components/layout/ChatBot.vue'



</script>

<style scoped>
.page-wapper{
    position: relative;
    min-height: 100vh
}
</style>