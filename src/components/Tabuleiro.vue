<template>

  <div class="tabuleiro">

    <p><strong>Jogador Atual:</strong> {{ jogadorAtual }}</p>
    <p><strong>Jogadas:</strong> {{ jogadas }}</p>

    <div class="cartas">
      <Carta
        v-for="carta in cartasEmbaralhadas"
        :key="carta.id_ordem"
        :conteudo="carta.conteudo"
        :visualizacao="cartasAbertas.includes(carta.id_ordem) || cartasPontudas.includes(carta.id_ordem) "
        @click="() => abrirCarta(carta.id, carta.id_ordem)"
      />
    </div>

  </div>

  <Transition name="fade">
    <FimDeJogo v-if="fimJogo" />
  </Transition>

</template>

<script setup lang="ts">

import { computed } from 'vue'

import Carta from '@/components/Carta.vue'
import FimDeJogo from '@/components/Modal/FimDeJogo.vue'
import {useCartaStore} from '@/stores/useCartaStore.ts'
import {useJogadorStore} from '@/stores/useJogadorStore.ts'
import {useJogadaStore} from '@/stores/useJogadaStore.ts'

const cartaStore   = useCartaStore()
const jogadorStore = useJogadorStore()
const jogadaStore  = useJogadaStore()

const cartasAbertas      = computed(() => cartaStore.cartasAbertas)
const cartasPontudas     = computed(() => cartaStore.cartasPontudas)
const cartasEmbaralhadas = computed(() => cartaStore.cartasEmbaralhadas)
const jogadorAtual       = computed(() => jogadorStore.jogadorAtual)
const jogadas            = computed(() => jogadorStore.jogadasJogadorAtual)

const fimJogo = computed(() => cartaStore.cartasEmbaralhadas.length == cartaStore.cartasPontudas.length)

const abrirCarta = (id: number, id_ordem: number) => {

  if(cartasAbertas.value.includes(id_ordem) || cartasPontudas.value.includes(id_ordem)) return


  jogadaStore.cadastarCartaAberta(id, id_ordem)
}

</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.tabuleiro {
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    font-size: 16px;
  }

  .cartas {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;

    @media (max-width: 864px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 640px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

</style>