module.exports = {
  supportedOperations() {
    return {
      "/": "division",
      "+": "addition",
      "-": "subtration",
      "*": "multiplication"
    }
  },
  square(num) {
    return Math.pow(num, 2)
  },
  compute(operator, operands) {
    switch(operator) {
      case '+':
        return operands[0] + operands[1]
      case '/':
        return operands[0] / operands[1]
      case '-':
        return operands[0] - operands[1]
      case '*':
        return operands[0] * operands[1]
      default:
        return undefined
    }
  }
}
