<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router';
import { mapActions, storeToRefs } from 'pinia';
import { useImageStore } from './store/imagesStore';

const imageStore = useImageStore()

const {images} = storeToRefs(imageStore)
const {imgGallery} = storeToRefs(imageStore)
const {imgGalleryStatus} = mapActions(imageStore, ["imgGalleryStatus"])

</script>

<template>
  <Header/>
  <RouterView :images="images" :imgGallery="imgGallery" :imgGalleryStatus="imgGalleryStatus" />
</template>
