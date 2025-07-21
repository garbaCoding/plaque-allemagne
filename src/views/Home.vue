<template>
  <div style="text-align:center; margin-top:2rem;">
    <h1>Plaque Allemagne</h1>
    <div style="margin:2rem 0;">
      <button @click="mode = 'photo'" style="margin:0.5rem;">📷 Prendre une photo</button>
      <button @click="mode = 'manual'" style="margin:0.5rem;">⌨️ Saisir manuellement</button>
    </div>
    <PhotoInput v-if="mode === 'photo'" @extracted="gotoResult" />
    <ManualInput v-if="mode === 'manual'" @extracted="gotoResult" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PhotoInput from '../components/PhotoInput.vue'
import ManualInput from '../components/ManualInput.vue'

const mode = ref(null)
const router = useRouter()

const gotoResult = (letters) => {
  router.push({ name: 'result', params: { letters } })
}
</script>
