<script setup>
import { ref, reactive, render } from 'vue';

const data = reactive({
    email: '',
    password: '',
    confirmPassword: ''
})

</script>

<template>
    <main>
        <h1>Sign Up</h1>

        <form>
            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="e-mail" v-model="data.email"/>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="password" v-model="data.password"/>

            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="confirm password" v-model="data.confirmPassword"/>

            <button>Sign Up</button>
        </form>
    </main>
</template>