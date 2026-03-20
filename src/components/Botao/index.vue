<template>
    <button class="botao" @click="$emit('click')">
        <slot />
    </button>
</template>

<script setup lang="ts">

const emit = defineEmits(['click'])

</script>

<style scoped>

.botao {
    background-color: var(--primaria);
    border-radius: var(--radius);
    color: var(--texto);
    font-size: 16px;
    padding: 12px 24px;
}

</style>