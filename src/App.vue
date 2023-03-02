<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router';
import { mapActions, storeToRefs } from 'pinia';
import { useImageStore } from './store/imagesStore';
import { useLoginStore } from './store/loginStore';

const loginStore = useLoginStore()

const {userStatus} = storeToRefs(loginStore)
const {changeStatus} = mapActions(useLoginStore, ["changeStatus"])
const {defineProperties} = mapActions(useLoginStore, ["defineProperties"])
const {logOut} = mapActions(useLoginStore, ["logOut"])

const imageStore = useImageStore()

const {images} = storeToRefs(imageStore)
const {imgGallery} = storeToRefs(imageStore)
const {imgGalleryStatus} = mapActions(useImageStore, ["imgGalleryStatus"])

</script>

<template>
  <Header :userStatus="userStatus" :changeStatus="changeStatus" :defineProperties="defineProperties" :logOut="logOut" :imgGallery="imgGallery"/>
  
  <RouterView :userStatus="userStatus" :changeStatus="changeStatus" :defineProperties="defineProperties" :logOut="logOut" :images="images" :imgGallery="imgGallery" :imgGalleryStatus="imgGalleryStatus" />
</template>
