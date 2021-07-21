class OrderDto {
  constructor (description, price, quantity) {
    this.description = description
    this.price = price
    this.quantity = quantity
  }

  static fromJson (json) {
    return new OrderDto(json?.description, json?.price, json?.quantity)
  }
}

module.exports = OrderDto
