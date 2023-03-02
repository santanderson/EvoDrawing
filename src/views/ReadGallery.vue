<script setup>
import router from '@/router'
import FlashMessage from '../components/FlashMessage.vue';

const props = defineProps({
    userStatus: Object,
    imgGallery: Array
})

const data = {
    userId: ''
}

async function getter () {
    if(!props.userStatus.isLoged) return

    data.userId = props.userStatus.userId

    fetch(`http://localhost:3000/images/gallery`, 
    {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.userStatus.token}`
            },
            body: JSON.stringify(data)
    })
    .then( res => {
        if (res.status !== 200 || !res.status) {
            const obj = res.json().then( res => {
                window.alert(res.msg)
            })
        } else {
            const obj = res.json().then( res => {
                
                props.imgGallery.splice(0, props.imgGallery.length)
                for (const v of res) {
                    props.imgGallery.push(v);
                }
                router.push('/gallery');
            }
            )
        }
    })
}
getter();

</script>

<template>

    <FlashMessage v-if="!props.userStatus.isLoged" msg="Sign In Before" url="login"/>

</template>