class CuponValidator {
  static validate (cupon) {
    if (cupon === 0 || cupon > 100) { return false }
    return true
  }
}

module.exports = CuponValidator
