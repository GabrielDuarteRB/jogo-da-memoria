<template>

  <select>
    <option
      v-for="opcao in opcoes "
      :key="opcao.texto"
    >
      {{ opcao.texto }}
    </option>
  </select>>

</template>

<script setup lang="ts">

interface Opcoes {
  valor: string | number
  texto: string
}

defineProps<{
  opcoes: Opcoes[]
}>()

</script>