<template>
  <div>
    <h2>Amigos</h2>
    <input v-model="email" placeholder="Email del amigo">
    <button @click="addFriend">Añadir</button>

    <div v-for="f in friends" :key="f">{{ f }}</div>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default {
  data() {
    return { email: "", friends: [] };
  },
  async mounted() {
    await this.load();
  },
  methods: {
    async load() {
      const ref = doc(db, "users", auth.currentUser.uid);
      const snap = await getDoc(ref);
      this.friends = snap.data().friends || [];
    },
    async addFriend() {
      const ref = doc(db, "users", auth.currentUser.uid);
      const snap = await getDoc(ref);

      const updated = [...(snap.data().friends || []), this.email];

      await updateDoc(ref, { friends: updated });
      this.friends = updated;
      this.email = "";
    }
  }
};
</script>
