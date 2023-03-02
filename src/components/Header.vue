<script setup>
import {RouterLink} from 'vue-router'
import { ref } from 'vue';
import router from '@/router'

const props = defineProps({
    userStatus: Object,
    changeStatus: Function,
    defineProperties: Function,
    logOut: Function,
    imgGallery: Object
})

const men = ref(null)



if(!props.imgGallery[0]) router.push('/')


function openMenu() {
    if(men.value.style.visibility === 'visible') return men.value.style.visibility = 'hidden'
    men.value.style.visibility = 'visible'
}

function logOut() {
    props.logOut
    location.reload()
}

</script>

<template>
    <header>
        <div>
            <button @click="openMenu" id="hamburguer">
                |||
            </button>

            <h1 class="logo">EvoDrawing</h1>

            <nav ref="men" id="menu">
                <ul>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/readGallery">Gallery</RouterLink>
                </ul>
            </nav>
        </div>

        <div>
            <div class="searchBar"></div>

            <div v-if="!props.userStatus.isLoged">
                <RouterLink to="/login">Sign In</RouterLink>
                <RouterLink to="/register">Sign Up</RouterLink>
            </div>
            <button v-else @click="logOut">Log Out</button>
        </div>
    </header>
</template>

<style>
    header{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        color: white;
        font-weight: 600;
        background-color: rgba(0, 0, 0, 0.63);
    }
    header div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 30px;
        padding: 0 20px;
    }
    header div #hamburguer{
        z-index: 99;
        padding: 5px;
    }
    header div #menu {
        position: absolute;
        top: 0;
        left: 0;
        padding: 40px 20px;
        visibility: hidden;
        background-color: rgba(0, 0, 0, 0.63);
    }
    header div #menu ul {
        display: flex;
        flex-flow: column nowrap;
        gap: 30px;
    }
    header div a{
        color: white;
        text-decoration: none;
    }
    header div button {
        background-color: transparent;
        border: none;
        color: white;
        font-weight: 600;
        cursor: pointer;
    }

</style>