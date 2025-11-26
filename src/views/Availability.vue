<template>
  <div>
    <h2>Mis horas libres</h2>
    <input type="date" v-model="date">
    <input type="time" v-model="start">
    <input type="time" v-model="end">
    <button @click="save">Guardar</button>

    <div v-for="slot in slots" :key="slot.id">
      {{ slot.date }} — {{ slot.start }} a {{ slot.end }}
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      date: "",
      start: "",
      end: "",
      slots: []
    };
  },
  async mounted() {
    await this.load();
  },
  methods: {
    async save() {
      await addDoc(collection(db, "availability"), {
        uid: auth.currentUser.uid,
        date: this.date,
        start: this.start,
        end: this.end
      });
      this.load();
    },
    async load() {
      const q = query(
        collection(db, "availability"),
        where("uid", "==", auth.currentUser.uid)
      );
      const snap = await getDocs(q);
      this.slots = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    }
  }
};
</script>
