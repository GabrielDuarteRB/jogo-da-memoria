<template>

  <div class="input">
    <input
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      :class="{ 'input-erro': erro }"
    />
    <span v-show="erro" class="erro">{{ erro }}</span>
  </div>

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
    },
    erro: {
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
  
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  .input-erro {
    border-color: var(--erro);
  }

  input {
    background-color: var(--superficie);
    border: 1px solid var(--borda);
    border-radius: var(--radius);
    color: var(--texto);
    padding: 12px;
    width: 100%;
  }

  .erro {
    color: var(--erro);
    font-size: 12px;
    padding-left: 4px;
  }
}

</style>
