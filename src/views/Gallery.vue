<script setup>
import { RouterLink } from 'vue-router'

const imgs = [{
    name: "Broly Picture",
    src: "file path"
},{
    name: "Vegeta Picture",
    src: "file path"
}]

</script>

<template>
    <main>
        <div>
            <h1>Gallery</h1>
            <RouterLink to="/addImage">Post Image</RouterLink>
        </div>

        <div class="gallery">
            
            <div v-for="img in imgs">
                <RouterLink :to="img.src">
                    <h2>img.name</h2>

                    <img :src="img.src"/>
                </RouterLink>
            </div>
        </div>
    </main>
</template>