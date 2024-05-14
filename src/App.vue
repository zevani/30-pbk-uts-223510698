<template>
  <div>
    <label for="selection">Pilih Opsi:</label>
    <select id="selection" v-model="selectedOption">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
    <p>Opsi terpilih: {{ selectedOption }}</p>
    <component :is="currentComponent"></component>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'


import post from './components/post.vue'
import todo from './components/todo.vue'

const options = ["Postingan", "Todo list"]
const selectedOption = ref("Postingan") 


const currentComponent = computed(() => {
  if (selectedOption.value === "Postingan") {
    return post
  } else if (selectedOption.value === "Todo list") {
    return todo
  }
  return null
})
</script>

<style scoped>
div {
  font-family: Arial, sans-serif;
  margin: 200px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

select {
  padding: 5px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

p {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}
</style>

