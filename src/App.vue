<template>
  <div>    
    <div>
      <button
        v-for="option in options"
        :key="option"
        :value="option"
        @click="selectOption(option)"
        :class="{'active': selectedOption === option}"
      >
        {{ option }}
      </button>
    </div>
    <p> {{ selectedOption }}</p>
    <component :is="currentComponent"></component>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import Post from './components/post.vue'
import Todo from './components/todo.vue'

const options = ["Postingan", "Todo list"]
const selectedOption = ref("Postingan")

const currentComponent = computed(() => {
  if (selectedOption.value === "Postingan") {
    return Post
  } else if (selectedOption.value === "Todo list") {
    return Todo
  }
  return null
})

const selectOption = (option) => {
  selectedOption.value = option
}
</script>

<style scoped>
div {
  font-family: Arial, sans-serif;
  margin: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

button {
  padding: 10px 15px;
  margin-right: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f8f9fa;
}

button.active {
  background-color: #7900FF;
  color: rgb(12, 12, 12);
}

p {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}
</style>
