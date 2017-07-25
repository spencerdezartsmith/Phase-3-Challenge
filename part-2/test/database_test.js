const expect = require('chai').expect
const db = require('../db/database')

describe('grocery_store', function () {
  describe('#itemsInSection', function () {
    it('returns all of the items in a section', function () {
      return db.itemsInSection('bulk')
        .then((results) => {
          const names = results.map(item => item.name)
          expect(names).to.deep.equal([ 'Flour', 'Pasta', 'Rice' ])
        })
    })
  })

  describe('#cheapItems', function () {
    it('returns a list of all items below $10', function () {
      return db.cheapItems()
        .then((results) => {
          expect(results[0].name).to.eql('Fish')
          expect(results[results.length - 1].name).to.eq('Honey')
        })
    })
  })

  describe('#countItemsInSection', function () {
    it('returns the number of items in a section', function () {
      return db.countItemsInSection('packaged')
        .then((result) => {
          expect(result.count).to.eql('5');
        })
    })
  })
})
