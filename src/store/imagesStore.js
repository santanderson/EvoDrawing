import { defineStore } from "pinia";

export const useImageStore = defineStore('image', {
    state: () => ({
        images: [],
        imgGallery: []
    }),
    actions: {
        imgGalleryStatus () {
            this.imgGallery = []
        }
    }
})