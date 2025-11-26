<template>
  <nav class="navbar">
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/availability">Disponibilidad</router-link> |
    <router-link to="/friends">Amigos</router-link> |
    <router-link to="/matches">Coincidencias</router-link> |
    <button @click="logout">Salir</button>
  </nav>
</template>

<script>
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

export default {
  methods: {
    async logout() {
      await signOut(auth)
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.navbar {
  padding: 10px;
  background: #eee;
}
.navbar a {
  margin-right: 10px;
}
</style>
