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


function openMenu(e) {
    if(men.value.style.visibility === 'visible') { 

        e.target.classList.remove('active')
        return men.value.style.visibility = 'hidden'
    }

    e.target.classList.add('active')
    men.value.style.visibility = 'visible'
}

function logOut() {
    props.logOut
    location.reload()
}

</script>

<template>
    <header>
        <div class="container">
            <button @click="openMenu" id="hamburguer"></button>

            <h1 class="logo">EvoDrawing</h1>

            <nav ref="men" id="menu">
                <ul>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/readGallery">Gallery</RouterLink>
                </ul>
            </nav>
        </div>

        <div class="container">
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
        padding: 10px 40px;
        height: 60px;
        background-color: rgb(0, 150, 87);
    }
    .container {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 30px;
        padding: 0 20px;
    }
    .container .logo{
        font-size: 24px;
    }
    .container div{
        display: flex;
        flex-flow: row nowrap;
        gap: 60px;
    }

    .container #menu {
        position: absolute;
        top: 0;
        left: 0;
        padding: 100px 20px;
        width: 300px;
        height: 100%;
        visibility: hidden;
        background-color: rgb(21,32,43);
    }
    .container #menu ul {
        display: flex;
        flex-flow: column nowrap;
        gap: 30px;
    }
    .container a{
        color: white;
        text-decoration: none;
    }
    .container button {
        background-color: transparent;
        border: none;
        color: white;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
    }

    /*Hamburguer button*/

    #hamburguer{
        z-index: 99;
        border-top: 3px solid white;
        width: 28px;
    }
    #hamburguer::after, #hamburguer::before{
        content: '';
        display: block;
        width: 28px;
        height: 3px;
        background-color: white;
        margin-top: 7px;
        transition: 0.4s;
    }
    #hamburguer.active {
        border-top-color: transparent;
    }
    #hamburguer.active::before {
        transform: rotate(135deg)
    }
    #hamburguer.active::after {
        transform: rotate(-135deg);
        margin-top: -4px;
    }

</style>