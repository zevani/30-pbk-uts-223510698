<template>
  <div>
    <h1>Photos</h1>
    <ul>
      <li v-for="photo in photos" :key="photo.id">
        <img :src="photo.thumbnailUrl" :alt="photo.title" @click="showFullSize(photo.url)">
      </li>
    </ul>
    
    <div v-if="selectedPhotoUrl" class="photo-modal" @click="selectedPhotoUrl = null">
      <img :src="selectedPhotoUrl" class="full-size-photo" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const photos = ref([])
const selectedPhotoUrl = ref(null)

// Fetch photos from JSONPlaceholder API
onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
    photos.value = response.data
  } catch (error) {
    console.error('Error fetching photos:', error)
  }
})

// Show full-size photo when thumbnail is clicked
const showFullSize = (url) => {
  selectedPhotoUrl.value = url
}
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
