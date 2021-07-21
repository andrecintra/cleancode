/* eslint-disable no-undef */
const { handler } = require('../src/index')

describe('Testes de unidade', () => {
  test('Deve fazer um pedido com CPF inválido', () => {
    const validOrderWithValidCpf = {
      cpf: '816.749.870-05',
      order: {
        description: 'Descrição do produto',
        price: 100,
        quantity: 5
      }
    }

    const result = handler(validOrderWithValidCpf)

    expect(result).toBeTruthy()
  })

  test('Não deve fazer um pedido com CPF inválido', () => {
    const validOrderWithInvalidCpf = {
      cpf: '816.749.870-11',
      order: {
        description: 'Descrição do produto',
        price: 100,
        quantity: 5
      }
    }

    try {
      handler(validOrderWithInvalidCpf)
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('CPF inválido')
    }
  })

  test('Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)', () => {
    const validOrder = {
      cpf: '816.749.870-05',
      order: {
        description: 'Descrição do produto',
        price: 100,
        quantity: 5
      }
    }

    const result = handler(validOrder)

    expect(result).toBeTruthy()
  })

  test('Não deve seguir com um pedido inválido (3 itens não definidos)', () => {
    const invalidOrder = {
      cpf: '816.749.870-05',
      order: {
        description: '',
        price: 0,
        quantity: 0
      }
    }

    try {
      handler(invalidOrder)
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('Pedido inválido')
    }
  })
})
