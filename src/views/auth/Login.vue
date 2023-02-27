<script setup>
import { ref, reactive, render } from 'vue';

const data = reactive({
    email: '',
    password: ''
})

</script>

<template>
    <main>
        <h1>Sign In</h1>

        <form>
            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="e-mail" v-model="data.email"/>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="password" v-model="data.password"/>

            <button>Sign In</button>
        </form>
    </main>
</template>