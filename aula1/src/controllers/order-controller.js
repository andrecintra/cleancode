const InputDto = require('../dto/input-dto')
const Exceptions = require('../exceptions/exceptions')
const OrderService = require('../services/order-service')
const CpfValidator = require('../validators/cpf-validator')
const CuponValidator = require('../validators/cupon-validator')
const OrderValidator = require('../validators/order-validator')

class OrderController {
  /**
     * Realiza pedidos, aplica cupons de desconto e retorna valor total
     * @param {InputDto} input
     * @returns {FinalOrder}
     */
  static order (input) {
    const inputDto = InputDto.fromJson(input)
    if (!CpfValidator.validate(inputDto.cpf)) {
      throw Exceptions.invalidCpfException
    }
    if (!OrderValidator.validate(inputDto.order)) {
      throw Exceptions.invalidOrder
    }
    if (!CuponValidator.validate(inputDto.cupon)) {
      throw Exceptions.invalidCupon
    }
    return OrderService.calculateFinalOrder(inputDto)
  }
}

module.exports = OrderController
