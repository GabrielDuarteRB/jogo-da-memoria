<template>

  <div class="carta">
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
  border: 1px solid var(--borda);
  border-radius: var(--radius);
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 150px;
  width: 150px;

  @media (max-width: 864px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 640px) {
    height: 75px;
    width: 75px;
  }

  .conteudo {
    font-size: 64px;

    @media (max-width: 864px) {
      font-size: 48px;
    }

    @media (max-width: 640px) {
      font-size: 32px;
    }
  }

  .verso {
    font-size: 48px;
    opacity: 0.3;
  }
}

</style>