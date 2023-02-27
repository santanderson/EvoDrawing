<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <header>
        <div>
            <button id="hamburguer">
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
                <RouterLink to="#">Sign in</RouterLink>
                <RouterLink to="#">Sign up</RouterLink>
            </div>
        </div>
    </header>
</template>