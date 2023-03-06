<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    images: Array
})

</script>

<template>
    <main>
        <div class="titleContainer">
            <h1 class="title">Home</h1>
            <RouterLink class="lnk" to="/addImage">Post Image</RouterLink>
        </div>

        <div class="gallery">
            
            <div class="imgCard" v-for="img in props.images">
                <RouterLink target="_blank" :to="img.src.split('/evoDrawingRemake/app')[1]">
                    <h2>{{ img.name }}</h2>

                    <img :src="img.src.split('/evoDrawingRemake/app')[1]">

                </RouterLink>
            </div>
        </div>
    </main>
</template>