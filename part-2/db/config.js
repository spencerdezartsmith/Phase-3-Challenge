module.exports = (env) => {
  if (env === 'development') {
    return 'postgres://localhost:5432/grocery_store'
  } else if (env === 'test') {
    return 'postgres://localhost:5432/grocery_store_test'
  }
}
