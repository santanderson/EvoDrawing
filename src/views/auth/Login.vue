<script setup>
import { ref, reactive, render } from 'vue';
import router from '@/router'

const props = defineProps({
    userStatus: Object,
    changeStatus: Function,
    defineProperties: Function
})

const data = reactive({
    email: '',
    password: ''
})

async function onSub(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/auth/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.status !== 200) {
                const obj = res.json().then( res => {
                    window.alert(res.msg)
            })
            } else{
                const obj = res.json().then(res => {
                    props.changeStatus(res.id, res.token)
                    login();
                }
            )}
        })
}

async function login() {
    fetch(`http://localhost:3000/auth/user/${props.userStatus.userId}`,
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${props.userStatus.token}`
            }
        }).then(res => {
            if (res.status !== 200) {
                const obj = res.json().then( res => {

                console.log(res)
            })
            } else {
                const re = res.json().then(res => {
                    if(res) {
                    
                        props.defineProperties(res.user.name, res.user.email)
                        router.push('/')

                    } else {
                        console.log('Algum erro ocorreu!')
                    }
                })
            }
        })
}

</script>

<template>
    <main>
        <h1>Sign In</h1>

        <form>
            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="e-mail" v-model="data.email"/>

            <label for="password">Password</label>
            <input type="password" id="password" placeholder="password" v-model="data.password"/>

            <button @click="onSub">Sign In</button>
        </form>
    </main>
</template>