<template>

    <div class="modal">
        <div class="modal-content" :style="modalStyle">
            <slot />
        </div>
    </div>

</template>

<script setup lang="ts">

import { computed } from 'vue'

const props = withDefaults(defineProps<{
    width?: string
    height?: string
}>(), {
    width: '600px',
    height: 'auto'
})

const modalStyle = computed(() => ({
    width: props.width,
    height: props.height,
}))

</script>

<style scoped>

.modal {
    align-items: center;
    background: var(--fundo);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
}

.modal-content {
    background: var(--superficie);
    border-radius: var(--radius);
    box-shadow: 0 0 10px var(--borda);
    display: flex;
    padding: 20px;  
}

</style>