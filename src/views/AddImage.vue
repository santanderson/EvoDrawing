<script setup>
import { ref, reactive, render } from 'vue';
import { RouterLink } from 'vue-router';
import FlashMessage from '../components/FlashMessage.vue';
import router from '@/router'

const props = defineProps({
    userStatus: Object
})

const data = new FormData()
const dynamicData = {
    name: '',
    file: ''
}

function addData(e) {
    dynamicData.file = e.target.files[0]
}

async function addImage(e) {
    e.preventDefault()

    data.append('name', dynamicData.name)
    data.append('userId', props.userStatus.userId)
    data.append('file', dynamicData.file)

    fetch(`http://localhost:3000/images/addImage`, 
    {
        method: 'POST',
            headers: {
                'Authorization': `Bearer ${props.userStatus.token}`
            },
            body: data
    })
    .then( res => {
        if (res.status !== 201 || !res.status) {
            const obj = res.json().then( res => {
                window.alert(res.msg)
                console.log(res.msg)
            })
        } else {
            const obj = res.json().then( res => {
                router.push('/');
            }
            )
        }
    })
}

</script>

<template>
    <main>
        <div>
            <h1>Post Image</h1>
            <RouterLink to="/">Back to Home</RouterLink>
        </div>

        <FlashMessage v-if="!props.userStatus.isLoged" msg="Sign In Before" url="login"/>

        <form v-else>
            <label for="name">Title</label>
            <input type="name" id="name" placeholder="title" v-model="dynamicData.name"/>

            <label for="file">Select the File</label>
            <input type="file" id="file" @change="addData"/>

            <button @click="addImage">Post</button>
        </form>
    </main>
</template>