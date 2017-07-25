const db = require('./connection')

const allItems = () => {
  return db.any('SELECT * FROM items')
}

const itemsInSection = (section) => {
  return db.any('SELECT * FROM items WHERE section = $1', [section])
}

const cheapItems = () => {
  return db.any('SELECT * FROM items WHERE price < 10 ORDER BY price ASC')
}

const countItemsInSection = (section) => {
  return db.any('SELECT COUNT(id) FROM items WHERE section = $1', [section])
}

const mostRecentOrders = () => {
  return db.any('SELECT id, order_date FROM orders ORDER BY order_date DESC LIMIT 10')
}

const lastShopperName = () => {
  return db.one('SELECT shoppers.name FROM shoppers JOIN orders ON shoppers.id = orders.shopper_id ORDER BY order_date DESC LIMIT 1')
}

const orderTotal = (order_id) => {
  return db.one('SELECT SUM(items.price) FROM items JOIN orders_items AS selected ON selected.item_id = items.id JOIN orders ON orders.id = selected.order_id WHERE orders.id = $1', [order_id])
}

module.exports = {
  allItems,
  itemsInSection,
  cheapItems,
  countItemsInSection,
  mostRecentOrders,
  lastShopperName,
  orderTotal
}
