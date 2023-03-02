<script setup>
import router from '@/router'

const props = defineProps({
    images: Array
})

async function getter () {
    fetch(`http://localhost:3000/images/`)
    .then( res => {
        if (res.status !== 200 || !res.status) {
            const obj = res.json().then( res => {
                window.alert(res.msg)
            })
        } else {
            const obj = res.json().then( res => {
                
                props.images.splice(0, props.images.length)
                for (const v of res) {
                    props.images.push(v);
                }
                
                router.push('/home');
            }
            )
        }
    })
}
getter();

</script>

<template>
</template>