class OrderValidator {
  static validate (order) {
    if (!order?.description || !order?.price || !order?.quantity) {
      return false
    }

    return true
  }
}

module.exports = OrderValidator
