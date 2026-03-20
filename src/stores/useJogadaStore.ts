import { defineStore } from 'pinia'
import { useCartaStore } from './useCartaStore'
import { useJogadorStore } from './useJogadorStore'

export const useJogadaStore = defineStore('jogadaStore', () => {

    const cartaStore = useCartaStore()
    const jogadorStore = useJogadorStore()

    const cadastarCartaAberta = (id: number, id_ordem: number) => {
        if (cartaStore.cartasAbertas.length >= 2) return

        cartaStore.cartasAbertas.push(id_ordem)

        if (cartaStore.cartasAbertas.length === 2) {
            jogadorStore.incrementarJogada()
            validarCarta(id)
        } else {
            cartaStore.primeiraCartaAbertaConteudo = id
        }
    }

    const validarCarta = (idSegundaCarta: number) => {
        if (idSegundaCarta === cartaStore.primeiraCartaAbertaConteudo) {
            cartaStore.cartasPontudas.push(...cartaStore.cartasAbertas)
        }

        setTimeout(() => {
            cartaStore.primeiraCartaAbertaConteudo = null
            cartaStore.cartasAbertas = []
        }, 1000)
    }

    return {
        cadastarCartaAberta
    }
})