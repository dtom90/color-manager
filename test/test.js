const expect = require('chai').expect
const colorManager = require('../index')

describe('color-manager', function() {
  describe('getRandomColor', function() {
    it('should import a function named getRandomColor', function() {
      expect(colorManager).to.have.property('getRandomColor')
      expect(colorManager.getRandomColor).to.be.a('function')
    })
  })
})
