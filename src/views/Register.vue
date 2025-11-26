<template>
  <div>
    <h1>Registro</h1>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="register">Crear cuenta</button>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default {
  data() {
    return { email: "", password: "" };
  },
  methods: {
    async register() {
      const user = await createUserWithEmailAndPassword(auth, this.email, this.password);

      // Crear registro básico en Firestore
      await setDoc(doc(db, "users", user.user.uid), {
        email: this.email,
        friends: []
      });

      this.$router.push("/dashboard");
    }
  }
};
</script>
