<template>
  <div class="inicial">
    <div class="inicial-content">
      <h1>Bem vindo</h1>
      <p>Encontre todos os pares com o menor número de jogadas!</p>
      <p>Escreva o nome do jogador da vez</p>
  
      <form @submit.prevent="inciarJogo">
        <Input
          v-model="nomeJogador"
          placeholder="Nome do jogador"
          :erro="erro"
        />
  
        <Botao type="submit">Iniciar jogo</Botao>
      </form>
    </div>

  </div>
</template>

<script setup lang="ts">

import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import {useJogadorStore} from '@/stores/useJogadorStore.ts'

import Input from '@/components/Input/index.vue'
import Botao from '@/components/Botao/index.vue'

const jogadorStore = useJogadorStore()
const router       = useRouter()

const nomeJogador = ref<string>('')
const erro        = ref<string>('')

const jogadores = computed(() => jogadorStore.jogadores)

const inciarJogo = () => {
  const nomeLimpo = nomeJogador.value.trim().replace(/\s+/g, ' ')

  if(!nomeLimpo.length) return erro.value = 'Informe o nome do jogador.'
  if(jogadores.value.includes(nomeLimpo)) return erro.value = 'Jogador já cadastrado.'

  jogadorStore.cadastrarJogador(nomeLimpo)
  router.push('/jogo')
}

watch(nomeJogador, () => {
  erro.value = ''
})

</script>

<style scoped>

.inicial {
  align-items: center;
  background-color: var(--superficie);
  border: 1px solid var(--borda);
  border-radius: var(--radius);
  box-shadow: 0 0 10px var(--borda);
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 350px;
  padding: 24px;
  width: 400px;

  .inicial-content {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 12px;
    height: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100%;
    margin-top: 24px;
    width: 100%;

    button {
      margin-top: auto;
    }
  }
}

</style>