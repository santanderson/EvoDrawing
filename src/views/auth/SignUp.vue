<script setup>
import { ref, reactive, render } from 'vue';
import FlashMessage from '../../components/FlashMessage.vue';
import router from '@/router'

const props = defineProps({
    userStatus: Object,
    changeStatus: Function,
    defineProperties: Function
})

const data = reactive({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
})

async function onSub(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/auth/register`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.status !== 201) {
                const obj = res.json().then( res => {
                window.alert(res.msg)
            })
            } else{
                const obj = res.json().then(res => {
                    router.push('login')
                }
            )}
        })
}

</script>

<template>

    <FlashMessage v-if="props.userStatus.isLoged" msg="Do Log Out Before!" url="/"/>

    <main v-else>
        <h1>Sign Up</h1>

        <form>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="name" v-model="data.name"/>

            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="e-mail" v-model="data.email"/>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="password" v-model="data.password"/>

            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="confirm password" v-model="data.confirmpassword"/>

            <button @click="onSub">Sign Up</button>
        </form>
    </main>
</template>