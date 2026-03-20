<template>

    <Modal width="500px" height="500px">
        <div class="fim-de-jogo">
            <div class="fim-de-jogo-content">
                <div class="fim-de-jogo-content-header">
                     
                    <h1 class="titulo">Parabéns, {{ jogadorAtual }}!</h1>
                    <p class="subtitulo">Você completou em <strong>{{ jogadasJogadorAtual }} jogadas</strong></p>
                    
                </div>

                <Lista 
                  :items="ranking" 
                  :destaque="0"
                  titulo="Ranking" 
                >
                  <template #default="{ item, index }">
                    <span class="ranking-posicao">{{ index + 1 }}º</span>
                    <span class="ranking-nome">{{ item.nome }}</span>
                    <span class="ranking-jogadas">{{ item.jogadas }} jogadas</span>
                  </template>
                </Lista>

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
import Lista from '@/components/Lista/index.vue'

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
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;

    .fim-de-jogo-content {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 12px;
        height: 100%;
        width: 100%; 

        .titulo {
            color: var(--texto);
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .subtitulo {
            color: var(--texto);
            font-size: 14px;
            margin-bottom: 36px;
            opacity: 0.6;

            strong {
                color: var(--primaria);
                opacity: 1;
            }
        }

        .fim-de-jogo-content-header {
            text-align: center;
        }

        .lista {
            height: 100%;

          .ranking-posicao {
            font-size: 13px;
            opacity: 0.5;
            width: 24px;
          }

          .ranking-nome {
            color: var(--texto);
            font-size: 14px;
            font-weight: 500;
            flex: 1;
          }

          .ranking-jogadas {
            color: var(--texto);
            font-size: 13px;
            opacity: 0.5;
          }
        }

        button {
            align-self: normal;
            margin-top: auto;
        }
    }
}


</style>
