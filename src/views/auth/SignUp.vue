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
        <div class="titleContainer">
            <h1 class="title">Sign Up</h1>
        </div>

        <form>
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="name" v-model="data.name"/>
            </div>

            <div>
                <label for="email">E-mail</label>
                <input type="email" id="email" placeholder="e-mail" v-model="data.email"/>
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="password" v-model="data.password"/>
            </div>

            <div>
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="confirm password" v-model="data.confirmpassword"/>
            </div>

            <button @click="onSub">Sign Up</button>
        </form>
    </main>
</template>