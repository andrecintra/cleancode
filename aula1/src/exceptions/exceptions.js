class Exceptions extends Error {
  static get invalidCpfException () {
    throw new Exceptions('CPF inválido')
  }

  static get invalidOrder () {
    throw new Exceptions('Pedido inválido')
  }
}

module.exports = Exceptions
