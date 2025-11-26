<template>
  <div>
    <h2>Fechas en común</h2>
    <button @click="searchMatches">Buscar coincidencias</button>

    <div v-for="m in matches" :key="m.id">
      {{ m.friend }} — {{ m.date }} ({{ m.start }} - {{ m.end }})
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

export default {
  data() {
    return { matches: [] };
  },
  methods: {
    async searchMatches() {
      this.matches = [];

      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);
      const friends = userSnap.data().friends || [];

      // obtener disponibilidad propia
      const mySlots = await getDocs(
        query(collection(db, "availability"), where("uid", "==", auth.currentUser.uid))
      );
      const myList = mySlots.docs.map(d => d.data());

      // comparar con cada amigo
      for (const friendEmail of friends) {
        // encontrar UID del amigo
        const usersRef = collection(db, "users");
        const friendSnap = await getDocs(query(usersRef, where("email", "==", friendEmail)));
        if (friendSnap.empty) continue;
        const friendUid = friendSnap.docs[0].id;

        // slots del amigo
        const frSlots = await getDocs(
          query(collection(db, "availability"), where("uid", "==", friendUid))
        );

        frSlots.forEach((doc2) => {
          const fr = doc2.data();
          for (const me of myList) {
            if (me.date === fr.date) {
              this.matches.push({
                friend: friendEmail,
                date: me.date,
                start: me.start,
                end: me.end
              });
            }
          }
        });
      }
    }
  }
};
</script>
