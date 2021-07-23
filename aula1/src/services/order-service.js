const FinalOrder = require('../dto/final-order')

class OrderService {
  static calculateFinalOrder (inputDto) {
    let total = 0
    if (inputDto.cupon) {
      total = (inputDto.order.quantity * inputDto.order.price) * (inputDto.cupon / 100)
    } else {
      total = inputDto.order.quantity * inputDto.order.price
    }
    return new FinalOrder(inputDto.order, total)
  }
}

module.exports = OrderService
