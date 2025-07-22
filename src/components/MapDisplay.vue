<template>
  <div style="width:100%; max-width:400px; margin:2rem auto;">
    <PlaqueInput @extracted="updatePrefix" />

    <svg viewBox="0 0 400 450" width="100%" style="background:#e9ecef; border-radius:8px;">
      <image href="/src/assets/germany.svg" x="0" y="0" width="400" height="450" />
      <circle
        v-if="selectedCity"
        :cx="latLonToXY(selectedCity.lat, selectedCity.lon).x"
        :cy="latLonToXY(selectedCity.lat, selectedCity.lon).y"
        r="6"
        fill="red"
        stroke="white"
        stroke-width="1"
      />
    </svg>

    <div style="text-align:center; margin-top:1rem;">
      <div v-if="selectedCity">
        <strong>{{ selectedCity.city }}</strong> ({{ selectedCity.prefix }})
      </div>
      <div v-else-if="selectedPrefix">
        <span style="color:#b00;">Aucune ville trouvée pour ce préfixe.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PlaqueInput from './PlaqueInput.vue'
import { latLonToXY } from '../utils/geo.js'
import data from '../assets/prefixes.json'

const selectedPrefix = ref('')

const updatePrefix = (prefix) => {
  selectedPrefix.value = prefix
}

const selectedCity = computed(() =>
  data.find(item => item.prefix.toUpperCase() === selectedPrefix.value)
)
</script>
