/* eslint-disable no-undef */
const { order } = require('../src/controllers/order-controller')

describe('Testes de unidade', () => {
  test('Deve fazer um pedido com CPF válido', () => {
    const validOrderWithValidCpf = {
      cpf: '979.673.340-43',
      order: {
        description: 'Descrição do produto',
        price: 100,
        quantity: 5
      }
    }

    const result = order(validOrderWithValidCpf)

    expect(result).toBeTruthy()
    expect(result.order).not.toBeNull()
    expect(result.total).toBe(500)
  })

  test('Não deve fazer um pedido com CPF inválido', () => {
    const validOrderWithInvalidCpf = {
      cpf: '979.673.340-50',
      order: {
        description: 'Descrição do produto',
        price: 100,
        quantity: 5
      }
    }

    try {
      order(validOrderWithInvalidCpf)
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

    const result = order(validOrder)

    expect(result).toBeTruthy()
    expect(result.order).not.toBeNull()
    expect(result.total).toBe(500)
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
      order(invalidOrder)
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('Pedido inválido')
    }
  })

  test('Deve fazer um pedido com cupom de desconto', () => {
    const validOrderWithValidCpfAndDiscount = {
      cpf: '816.749.870-05',
      order: {
        description: 'Descrição do produto',
        price: 100,
        quantity: 5
      },
      cupon: 50
    }

    const result = order(validOrderWithValidCpfAndDiscount)

    expect(result).toBeTruthy()
    expect(result.order).not.toBeNull()
    expect(result.total).toBe(250)
  })

  test('Não deve seguir com um pedido, se cupom inválido', () => {
    const invalidOrder = {
      cpf: '979.673.340-43',
      order: {
        description: 'Descrição do produto',
        price: 100,
        quantity: 5
      },
      cupon: 0
    }

    try {
      order(invalidOrder)
    } catch (error) {
      expect(error).toBeDefined()
      expect(error.message).toBe('Cupom inválido')
    }
  })
})
