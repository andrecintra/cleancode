const OrderDto = require('./order-dto')

class InputDto {
  constructor (cpf, order, cupon) {
    this.cpf = cpf
    this.order = OrderDto.fromJson(order)
    this.cupon = cupon
  }

  static fromJson (json) {
    return new InputDto(json?.cpf, json?.order, json?.cupon)
  }
}

module.exports = InputDto
