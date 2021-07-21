
const extractDigits = (cpf) => {
  return cpf.replace(/\D/g, '')
}

const isInvalidLength = (cpf) => {
  return cpf.length !== 11
}

const isBlocked = (cpf) => {
  const [digit1] = cpf
  return cpf.split('').every(digit => digit === digit1)
}

const calculateDigit = (cpf, factor, max) => {
  let total = 0
  for (const digit of toDigitArray(cpf).slice(0, max)) {
    total += digit * factor--
  }
  return (total % 11 < 2) ? 0 : (11 - total % 11)
}

const toDigitArray = (cpf) => {
  return [...cpf].map(digit => parseInt(digit))
}

const getCheckDigit = (cpf) => {
  return cpf.slice(9)
}

class CpfValidator {
  static validate (cpf = '') {
    cpf = extractDigits(cpf)
    if (isInvalidLength(cpf)) return false
    if (isBlocked(cpf)) return false
    const digit1 = calculateDigit(cpf, CpfValidator.factorDigit1, CpfValidator.maxDigits1)
    const digit2 = calculateDigit(cpf, CpfValidator.factorDigit2, CpfValidator.maxDigits2)
    const calculatedCheckDigit = `${digit1}${digit2}`
    return getCheckDigit(cpf) === calculatedCheckDigit
  }

  static get factorDigit1 () { return 10 }
  static get factorDigit2 () { return 11 }
  static get maxDigits1 () { return 9 }
  static get maxDigits2 () { return 10 }
}

module.exports = CpfValidator
