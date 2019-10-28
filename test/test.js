const {describe, it} = require('mocha')
const expect = require('chai').expect

const ColorManager = require('../index')

describe('ColorManager', () => {
  it('should import a class named ColorManager', () => {
    expect(ColorManager).to.be.a('function')
  })
  
  it('should have a method named getRandomColor', () => {
    expect(ColorManager.prototype).to.have.property('getRandomColor')
    expect(ColorManager.prototype.getRandomColor).to.be.a('function')
  })
  
  it('should not have any other methods', () => {
    expect(ColorManager.prototype).not.to.have.property('generateColor')
    expect(ColorManager.prototype).not.to.have.property('getMinDist')
    expect(ColorManager.prototype).not.to.have.property('tripconstValues')
    expect(ColorManager.prototype).not.to.have.property('colorLightness')
  })
  
  it('should generate a different random color each time', () => {
    
    const myColorManager = new ColorManager()
    
    expect(myColorManager.colors).to.deep.equal([])
    
    const color1 = myColorManager.getRandomColor()
    expect(color1).to.be.a('string')
    
    const color2 = myColorManager.getRandomColor()
    expect(color2).to.be.a('string')
    
    expect(color1).not.to.equal(color2)

    expect(myColorManager.colors).to.deep.equal([color1, color2])
    
  })
})
