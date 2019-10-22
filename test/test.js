const {describe, it} = require('mocha')
const expect = require('chai').expect

const colorManager = require('../index')

describe('color-manager', function() {
  describe('getRandomColor', function() {
    it('should import a function named getRandomColor', function() {
      expect(colorManager).to.have.property('getRandomColor')
      expect(colorManager.getRandomColor).to.be.a('function')
    })
    
    it('should generate a different random color each time', () => {
      
      const color1 = colorManager.getRandomColor()
      expect(color1).to.be.a('string')
  
      const color2 = colorManager.getRandomColor()
      expect(color2).to.be.a('string')
  
      expect(color1).not.to.equal(color2)
      
    })
  })
})
