<template>

  <div>
    <Tabuleiro v-if="cartasEmbaralhadas.length" />
  </div>

</template>

<script setup>

import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

import Tabuleiro from '@/components/Tabuleiro.vue'

import {useCartaStore} from '@/stores/useCartaStore.ts'
import {useJogadorStore} from '@/stores/useJogadorStore.ts'

const cartaStore = useCartaStore()
const jogadorStore = useJogadorStore()
const router = useRouter()

const cartasEmbaralhadas = computed(() => cartaStore.cartasEmbaralhadas)

onMounted(() => {
  if(jogadorStore.jogadores.length < 1) router.push('/')

  cartaStore.buscarCarta()
})

</script>