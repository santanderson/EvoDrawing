<script setup>
import {RouterLink} from 'vue-router'

</script>

<template>
    <header>
        <div>
            <button id="hamburguer">
                |||
            </button>

            <h1 class="logo">EvoDrawing</h1>

            <nav id="menu">
                <ul>
                    <RouterLink to="#">Home</RouterLink>
                    <RouterLink to="#">Gallery</RouterLink>
                </ul>
            </nav>
        </div>

        <div>
            <div class="searchBar"></div>

            <div>
                <RouterLink to="#">Sign In</RouterLink>
                <RouterLink to="#">Sign Up</RouterLink>
            </div>
        </div>
    </header>
</template>