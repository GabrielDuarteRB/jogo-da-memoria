<template>

  <div class="tabuleiro">

    <div class="tabuleiro-content-infos">
        <div class="item">
          <span class="label">Jogador</span>
          <span class="valor">{{ jogadorAtual }}</span>
        </div>
        <div class="dividir" />
        <div class="item">
          <span class="label">Jogadas</span>
          <span class="valor">{{ jogadas }}</span>
        </div>
    </div>
  
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

  .tabuleiro-content {
    align-items: center;
    background: var(--superficie);
    border: 1px solid var(--borda);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px 24px;
    width: fit-content;
  }
  
  .tabuleiro-content-infos {
    align-items: center;
    background: var(--superficie);
    border: 1px solid var(--borda);
    border-radius: var(--radius);
    box-shadow: 0 0 10px var(--borda);
    display: flex;
    gap: 24px;
    justify-content: space-between;
    padding: 16px 24px;
    width: 100%;

    .item {
      display: flex;
      flex-direction: column;
      gap: 2px;
      text-align: center;
      
      .label {
        color: var(--texto);
        font-size: 11px;
        letter-spacing: 0.08em;
        opacity: 0.5;
        text-transform: uppercase;
      }
      
      .valor {
        color: var(--texto);
        font-size: 18px;
        font-weight: 600;
      }

    }
  }

  p {
    font-size: 16px;
  }

  .cartas {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
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