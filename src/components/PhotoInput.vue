<template>
  <div style="margin-top:2rem;">
    <input type="file" accept="image/*" @change="onFileChange" />
    <div v-if="loading" style="margin:1rem;">🔍 Analyse en cours…</div>
    <div v-if="result">
      <p>Texte extrait : <strong>{{ result }}</strong></p>
      <button @click="emitExtract(result)">Continuer</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Tesseract from 'tesseract.js'
const emit = defineEmits(['extracted'])
const result = ref('')
const loading = ref(false)

const onFileChange = async (e) => {
  const file = e.target.files[0]
  if (file) {
    loading.value = true
    const { data: { text } } = await Tesseract.recognize(file, 'deu')
    // On enlève espaces, retours à la ligne, etc.
    result.value = text.replace(/\s/g, '')
    loading.value = false
  }
}
const emitExtract = (text) => {
  // Extrait les lettres avant le tiret, ex "B", "M", "KA"...
  const match = text.match(/^([A-ZÄÖÜ]{1,3})-/)
  emit('extracted', match ? match[1] : text)
}
</script>
