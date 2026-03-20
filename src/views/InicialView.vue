<template>
  <div class="inicial">
    <div class="inicial-content">
      <h1>Bem vindo</h1>
      <p>Escreva o nome do jogador da vez</p>
  
      <form @submit.prevent="inciarJogo">
        <Input
          v-model="nomeJogador"
          placeholder="Nome do jogador"
        />
  
        <Botao type="submit">Iniciar jogo</Botao>
      </form>
    </div>

  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'

import {useJogadorStore} from '@/stores/useJogadorStore.ts'

import Input from '@/components/Input/index.vue'
import Botao from '@/components/Botao/index.vue'

const jogadorStore = useJogadorStore()
const router    = useRouter()

const nomeJogador = ref<string>('')

const inciarJogo = () => {
  if(!nomeJogador.value.length) return

  jogadorStore.cadastrarJogador(nomeJogador.value)
  router.push('/jogo')
}

</script>

<style scoped>

.inicial {
  align-items: center;
  background-color: var(--superficie);
  border: 1px solid var(--borda);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 300px;
  padding: 24px;
  width: 400px;

  .inicial-content {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
    width: 100%;
  }
}

</style>