import { type CartaInterface } from '@/interfaces/CartaInterface.ts'

class CartaService {


  buscarCarta(): CartaInterface[] {
    return [
      { id: 1, conteudo: '😀' },
      { id: 2, conteudo: '😎' },
      { id: 3, conteudo: '🤔' },
      { id: 4, conteudo: '😴' },
      { id: 5, conteudo: '🥸' },
      { id: 6, conteudo: '🤩' },
      { id: 7, conteudo: '😤' },
      { id: 8, conteudo: '🥳' },
      { id: 9, conteudo: '😱' },
      { id: 10, conteudo: '🤯' },
    ]
  }


}

export default new CartaService()