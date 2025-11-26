<template>
  <div>
    <h1>Iniciar sesión</h1>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" type="password" />
    <button @click="login">Entrar</button>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  data() {
    return { email: "", password: "" };
  },
  methods: {
    async login() {
      await signInWithEmailAndPassword(auth, this.email, this.password);
      this.$router.push("/dashboard");
    }
  }
};
</script>
