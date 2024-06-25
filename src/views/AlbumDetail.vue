<template>
  <div>
    <h1>Photos in Album {{ albumId }}</h1>
    <ul>
      <li v-for="photo in photos" :key="photo.id">
        <img :src="photo.thumbnailUrl" :alt="photo.title" @click="showPhoto(photo.url)">
      </li>
    </ul>
    <div v-if="selectedPhotoUrl" class="photo-modal" @click="selectedPhotoUrl = null">
      <img :src="selectedPhotoUrl" class="full-size-photo" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAlbumStore } from '../stores/albumStore.js'
import { useRouter } from 'vue-router'

const store = useAlbumStore()
const router = useRouter()

const albumId = router.currentRoute.value.params.id
const selectedPhotoUrl = ref(null)

onMounted(() => {
  store.fetchPhotos(albumId)
})

const showPhoto = (url) => {
  selectedPhotoUrl.value = url
}

// Tidak perlu mendeklarasikan variabel photos di sini karena sudah diambil dari store
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

li {
  padding: 10px;
  cursor: pointer;
}

img {
  max-width: 150px;
  max-height: 150px;
}

.photo-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-size-photo {
  max-width: 90%;
  max-height: 90%;
}
</style>
