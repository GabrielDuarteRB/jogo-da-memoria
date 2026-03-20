import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { type JogadorRankingInterface } from '@/interfaces/JogadorRankingInterface.ts'

export const useJogadorStore = defineStore('jogadorStore', () => {

    const jogadores = ref<string[]>([])
    const jogadas = ref<number[]>([])

    const jogadorAtual = computed(() => jogadores.value[jogadores.value.length - 1])

    const jogadasJogadorAtual = computed(() => jogadas.value[jogadas.value.length - 1] ?? 0)

    const ranking = computed((): JogadorRankingInterface[] => {
        return jogadores.value
            .map((nome, index) => ({
                nome,
                jogadas: jogadas.value[index] ?? 0
            }))
            .sort((a, b) => a.jogadas - b.jogadas)
    })

    const cadastrarJogador = (nome: string) => {
        if (!nome.trim().length) return
        jogadores.value.push(nome)
    }

    const incrementarJogada = () => {
        const index = jogadores.value.length - 1
        jogadas.value[index] = (jogadas.value[index] ?? 0) + 1
    }

    return {
        jogadores,
        jogadas,
        jogadorAtual,
        jogadasJogadorAtual,
        ranking,
        cadastrarJogador,
        incrementarJogada
    }
})