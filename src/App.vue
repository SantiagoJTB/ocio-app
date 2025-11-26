<template>
  <div>
    <NavBar v-if="user"/>
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth } from './firebase'
import NavBar from './components/NavBar.vue'

const user = ref(null)

onMounted(() => {
  auth.onAuthStateChanged(u => user.value = u)
})
</script>
