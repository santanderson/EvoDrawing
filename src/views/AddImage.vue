<script setup>
import { ref, reactive, render } from 'vue';

const data = reactive({
    name: ''
})
</script>

<template>
    <main>
        <div>
            <h1>Post Image</h1>
            <RouterLink to="#">Back to Home</RouterLink>
        </div>

        <form>
            <label for="name">Title</label>
            <input type="name" id="name" placeholder="title" v-model="data.name"/>

            <label for="file">Select the File</label>
            <input type="file" id="file"/>

            <button>Post</button>
        </form>
    </main>
</template>