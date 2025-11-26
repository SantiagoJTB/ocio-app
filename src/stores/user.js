import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from '../firebase'

export const useUserStore = defineStore('user', () => {
  const user = ref(auth.currentUser)

  // Observa cambios en la autenticación de Firebase
  auth.onAuthStateChanged((u) => {
    user.value = u
  })

  return { user }
})
