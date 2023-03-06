<script setup>
import { RouterLink } from 'vue-router'
import FlashMessage from '../components/FlashMessage.vue';
import router from '@/router'

const props = defineProps({
    userStatus: Object,
    imgGallery: Array
})

const data = {
    userId: '',
    imgId: ''
}

function confirmDelete(e) {
    const element = e.target
    
    if(window.confirm('Do you really want to delete this image?')) deleteImg(element)
}

async function deleteImg(e) {
    const imgId = e.parentNode.children[0].children[1].alt
    data.userId = props.userStatus.userId
    data.imgId = imgId

    fetch('http://localhost:3000/images/gallery/delete', {
        method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.userStatus.token}`
            },
            body: JSON.stringify(data)
    }).then( res => {
        if (res.status !== 200 || !res.status) {
            const obj = res.json().then( res => {
                window.alert(res.msg)
            })
        } else {
            const obj = res.json().then( res => {
                
                router.push('/readGallery')
            }
            )
        }
    })
}

</script>

<template>

    <FlashMessage v-if="!props.userStatus.isLoged" msg="Sign In Before!" url="login"/>

    <main v-else>
        <div class="titleContainer">
            <h1 class="title">Your Gallery</h1>
            <RouterLink class="lnk" to="/addImage">Post Image</RouterLink>
        </div>

        <div class="gallery">

            <FlashMessage v-if="!props.imgGallery[0]" msg="Your gallery is empty, post some images!" url="addImage"/>
            
            <div class="imgCard" v-for="img in props.imgGallery">
                <RouterLink target="_blank" :to="img.src.split('/evoDrawingRemake/app')[1]">
                    <h2>{{ img.name }}</h2>

                    <img :alt="img._id" :src="img.src.split('/evoDrawingRemake/app')[1]"/>
                </RouterLink>
                <button @click="confirmDelete">Delete</button>
            </div>
        </div>
    </main>
</template>