<template>

    <Modal width="500px" height="500px">
        <div class="fim-de-jogo">
            <div class="fim-de-jogo-content">
                <div class="fim-de-jogo-content-header">
                    <h1>Parabens {{ jogadorAtual }}</h1>
                    <p>Você completou o jogo em {{ jogadasJogadorAtual }} jogadas</p>
                    
                    <div class="ranking">
                        <h3>Ranking atual</h3>
    
                        <div v-for="(jogador, index) in ranking" :key="index">
                            <p>{{ jogador.nome }} - {{ jogador.jogadas }}</p>
                        </div>
                    </div>
                </div>

                <Botao @click="reiniciarJogo">Novo Jogador</Botao>
            </div>
        </div>
    </Modal>

</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useRouter } from 'vue-router'

import { useJogadorStore } from '@/stores/useJogadorStore'
import { useCartaStore } from '@/stores/useCartaStore'

import Modal from '@/components/Modal/index.vue'
import Botao from '@/components/Botao/index.vue'

const jogadorStore = useJogadorStore()
const cartaStore   = useCartaStore()
const router       = useRouter()

const jogadorAtual        = computed(() => jogadorStore.jogadorAtual)
const jogadasJogadorAtual = computed(() => jogadorStore.jogadasJogadorAtual)
const ranking             = computed(() => jogadorStore.ranking)

const reiniciarJogo = () => {
    cartaStore.reiniciarJogo()
    router.push('/')
}

</script>

<style scoped>

.fim-de-jogo {
    
    width: 100%;

    .fim-de-jogo-content {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 12px;
        height: 100%;
        justify-content: space-between;

        .fim-de-jogo-content-header {
            text-align: center;
        }

        .ranking {
            text-align: center;
            margin-top: 24px;
            width: 100%;
        }
    }
}


</style>
