<template>
  <div>
    <label for="input-letters">Saisis les lettres de la plaque :</label>
    <input
      id="input-letters"
      v-model="inputValue"
      type="text"
      maxlength="4"
      placeholder="Code plaque (ex: M, B, HH...)"
      style="font-size:1.2rem; padding:.3rem 1rem; border-radius:5px; border:1px solid #aaa; text-align:center; text-transform:uppercase;"
    />
    <button
      @click="submit"
      :disabled="!inputValue.trim()"
      style="margin-left:1rem;"
    >Valider</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['extracted'])
const inputValue = ref('')
const submit = () => {
  emit('extracted', inputValue.value.trim().toUpperCase())
}
</script>
