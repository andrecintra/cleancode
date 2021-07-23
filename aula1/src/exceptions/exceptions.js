class Exceptions extends Error {
  static get invalidCpfException () {
    throw new Exceptions('CPF inválido')
  }

  static get invalidOrder () {
    throw new Exceptions('Pedido inválido')
  }

  static get invalidCupon () {
    throw new Exceptions('Cupom inválido')
  }
}

module.exports = Exceptions
