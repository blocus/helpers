import { isValidPassword } from './'

describe(`isValidPassword`, () => {
  it('Should returns true', () => {
    expect(isValidPassword('pasSWO123@', { lower: false, upper: false, digits: false, symbols: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { upper: false, digits: false, symbols: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { lower: false, digits: false, symbols: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { digits: false, symbols: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { lower: false, upper: false, symbols: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { upper: false, symbols: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { lower: false, symbols: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { symbols: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { lower: false, upper: false, digits: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { upper: false, digits: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { lower: false, digits: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { digits: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { lower: false, upper: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { upper: false })).toBe(true)
    expect(isValidPassword('pasSWO123@', { lower: false })).toBe(true)
    expect(isValidPassword('pasSWO123@')).toBe(true)
  })
  it('Returns false if pattern is not valid', () => {
    expect(isValidPassword('PASSWO123@', { upper: false, digits: false, symbols: false })).toBe(false)
    expect(isValidPassword('passwo123@', { lower: false, digits: false, symbols: false })).toBe(false)
    expect(isValidPassword('012345123@', { digits: false, symbols: false })).toBe(false)
    expect(isValidPassword('pasSWOqsdq', { lower: false, upper: false, symbols: false })).toBe(false)
    expect(isValidPassword('PASSWOAZE@', { upper: false, symbols: false })).toBe(false)
    expect(isValidPassword('passsword@', { lower: false, symbols: false })).toBe(false)
    expect(isValidPassword('@@@@@@@@@@', { symbols: false })).toBe(false)
    expect(isValidPassword('pasSWO1234', { lower: false, upper: false, digits: false })).toBe(false)
    expect(isValidPassword('pasSWO123', { upper: false, digits: false })).toBe(false)
    expect(isValidPassword('pasSWO123', { lower: false, digits: false })).toBe(false)
    expect(isValidPassword('pasSWO123', { digits: false })).toBe(false)
    expect(isValidPassword('pasSWO123', { lower: false, upper: false })).toBe(false)
    expect(isValidPassword('pasSWO123', { upper: false })).toBe(false)
    expect(isValidPassword('pasSWO123', { lower: false })).toBe(false)
    expect(isValidPassword('pasSWO123')).toBe(false)
    expect(isValidPassword('pasSWO@@@')).toBe(false)
    expect(isValidPassword('pas@@@123')).toBe(false)
    expect(isValidPassword('@@@SWO123')).toBe(false)
  })

  it('Returns false length is not valid', () => {
    expect(
      isValidPassword('pasSWO123@', { length: 32, lower: false, upper: false, digits: false, symbols: false })
    ).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, upper: false, digits: false, symbols: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, lower: false, digits: false, symbols: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, digits: false, symbols: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, lower: false, upper: false, symbols: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, upper: false, symbols: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, lower: false, symbols: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, symbols: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, lower: false, upper: false, digits: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, upper: false, digits: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, lower: false, digits: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, digits: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, lower: false, upper: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, upper: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32, lower: false })).toBe(false)
    expect(isValidPassword('pasSWO123@', { length: 32 })).toBe(false)
  })
})
