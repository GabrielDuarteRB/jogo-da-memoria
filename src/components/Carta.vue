<template>

  <div class="carta" :class="{ 'aberta': visualizacao }">
    <Transition name="virar" mode="out-in">
      <p v-if="visualizacao" key="frente" class="conteudo">{{ conteudo }}</p>
      <p v-else key="verso" class="verso">?</p>
    </Transition>
  </div>

</template>

<script setup lang="ts">

defineProps<{
  visualizacao: boolean,
  conteudo: string | number
}>()

</script>

<style scoped>

.virar-enter-active,
.virar-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.virar-enter-from {
  transform: rotateY(90deg);
  opacity: 0;
}

.virar-leave-to {
  transform: rotateY(-90deg);
  opacity: 0;
}

.carta {
  align-items: center;
  background: var(--superficie);
  border: 1px solid var(--borda);
  border-radius: var(--radius);
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 150px;
  transition: all 0.2s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  user-select: none;
  width: 150px;

  &:hover {
    border-color: var(--primaria);
    box-shadow: 0 8px 24px color-mix(in srgb, var(--primaria) 20%, transparent);
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(-1px);
  }

  &.aberta {
    border-color: var(--primaria);
    background: color-mix(in srgb, var(--primaria) 10%, var(--superficie));
  }

  @media (max-width: 864px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 640px) {
    height: 75px;
    width: 75px;
  }

  .conteudo {
    border-color: var(--primaria);
    background: color-mix(in srgb, var(--primaria) 10%, var(--superficie));
    font-size: 64px;

    @media (max-width: 864px) {
      font-size: 48px;
    }

    @media (max-width: 640px) {
      font-size: 32px;
    }
  }

  .verso {
    color: var(--primaria);
    font-size: 48px;
    font-weight: 700;
    opacity: 0.3;
  }
}

</style>