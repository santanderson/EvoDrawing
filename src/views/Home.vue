<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    images: Array
})

console.log(props.images[0].src.split('/evoDrawingRemake')[1])

</script>

<template>
    <main>
        <div>
            <h1>Home</h1>
            <RouterLink to="/addImage">Post Image</RouterLink>
        </div>

        <div class="gallery">
            
            <div v-for="img in props.images">
                <RouterLink :to="img.src">
                    <h2>{{ img.name }}</h2>

                    <img :src="img.src.split('/evoDrawingRemake/app')[1]">

                </RouterLink>
            </div>
        </div>
    </main>
</template>