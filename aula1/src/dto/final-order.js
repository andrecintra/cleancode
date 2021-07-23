const OrderDto = require('./order-dto')

class FinalOrder {
  constructor (order, total) {
    this.order = OrderDto.fromJson(order)
    this.total = total
  }

  static fromJson (json) {
    return new FinalOrder(json?.order, json?.total)
  }
}

module.exports = FinalOrder
