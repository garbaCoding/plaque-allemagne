<template>
  <div style="text-align:center; margin-top:2rem;">
    <h2>Résultat</h2>
    <div v-if="city">
      <MapDisplay :lat="city.lat" :lon="city.lon" :city="city.city" />
      <p><strong>{{ city.city }}</strong></p>
      <p><code>{{ city.prefix }}</code></p>
    </div>
    <div v-else>
      <p>Aucune correspondance trouvée pour <b>{{ letters }}</b>.</p>
    </div>
    <router-link to="/" style="display:inline-block; margin-top:2rem;">⬅️ Retour</router-link>
  </div>
</template>
<script setup>
import MapDisplay from '../components/MapDisplay.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import prefixes from '../assets/prefixes.json'

const route = useRoute()
const city = ref(null)
const letters = route.params.letters?.toUpperCase() || ''

onMounted(() => {
  city.value = prefixes.find(item => item.prefix === letters)
})
</script>
