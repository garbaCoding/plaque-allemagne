<template>
  <div style="margin-top:2rem;">
    <label for="manual">Saisis les lettres de la plaque (avant le tiret) :</label>
    <input
        v-model="inputValue"
        type="text"
        maxlength="4"
        style="font-size: 1.3rem; 
            padding: .3rem 1rem; 
            border-radius: 5px; 
            border:1px solid #aaa; 
            text-align: center;
            text-transform: uppercase;"
    />
    <button @click="submit" :disabled="!inputValue.trim()">Valider</button>
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
