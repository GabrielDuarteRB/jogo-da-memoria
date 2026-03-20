import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import CartaService from '@/services/CartaService.ts'
import { type CartaInterface } from '@/interfaces/CartaInterface.ts'

export const useCartaStore = defineStore('cartaStore', () => {

    const cartas = ref<CartaInterface[]>([])
    const cartasPontudas = ref<number[]>([])
    const cartasAbertas = ref<number[]>([])
    const primeiraCartaAbertaConteudo = ref<number | null>(null)

    const cartasEmbaralhadas = computed(() => {
        return [...cartas.value, ...cartas.value]
            .sort(() => 0.5 - Math.random())
            .map((carta, index) => ({
                id_ordem: index + 1,
                ...carta,
            }))
    })

    const buscarCarta = () => {
        cartas.value = CartaService.buscarCarta()
    }

    const reiniciarJogo = () => {
        cartas.value = []
        cartasPontudas.value = []
        cartasAbertas.value = []
        primeiraCartaAbertaConteudo.value = null
    }

    return {
        cartas,
        cartasPontudas,
        cartasAbertas,
        primeiraCartaAbertaConteudo,
        cartasEmbaralhadas,
        buscarCarta,
        reiniciarJogo
    }
})