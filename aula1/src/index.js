const InputDto = require('./dto/input-dto')
const Exceptions = require('./exceptions/exceptions')
const CpfValidator = require('./validators/cpf-validator')
const OrderValidator = require('./validators/order-validator')

class Main {
  static handler (input) {
    const inputDto = InputDto.fromJson(input)
    if (!CpfValidator.validate(inputDto.cpf)) {
      throw Exceptions.invalidCpfException
    }
    if (!OrderValidator.validate(inputDto.order)) {
      throw Exceptions.invalidOrder
    }
    return true
  }
}

module.exports = Main
