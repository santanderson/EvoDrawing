<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const estaVisivel = ref(true);

const props = defineProps({
    msg: String,
    url: String
})

</script>
<template>
    <Teleport to="body">
        <div
          v-if="estaVisivel" class="flashMessage">
            <div>
                <RouterLink :to="url">
                    <p>{{ msg }}</p>
                </RouterLink>
                <button @click="estaVisivel = false">&#x2715</button>
            </div>
        </div>
    </Teleport>
</template>

<style>
.flashMessage{
    display: flex;
    flex-flow: column nowrap;
    background-color: rgba(255, 0, 0, 0.8);
    color: white;
    border-radius: 10px;
    position: fixed;
    bottom: 80px;
    right: 80px;
    max-width: 400px;
    padding: 30px 40px;
}

.flashMessage div{
    display: flex;
    align-items: start;
    gap: 20px;
    padding: auto 20px;
}

.flashMessage a{
    text-decoration: none;
    color: white;
}

.flashMessage button {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
}
</style>