<template>

  <input 
    :value="modelValue" 
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :placeholder="placeholder"
    class="input"
  />

</template>

<script setup lang="ts">

defineProps({
    modelValue: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: false
    }
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

</script>

<style scoped>

.input {
  background-color: var(--superficie);
  border: 1px solid var(--borda);
  border-radius: var(--radius);
  color: var(--texto);
  padding: 12px;
  width: 100%;
}

</style>
