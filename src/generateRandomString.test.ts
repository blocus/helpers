import { generateRandomString, lowers, uppers, digits, symbols } from '.'
import { describe, it } from '@jest/globals'

const loops = 50

describe(`generateRandomString`, () => {
  it('Generates a random string with the default length and all type of characters', async () => {
    for (let index = 0; index < loops; index++) {
      const element = generateRandomString()
      expect(element.length).toBe(32)
    }
  })

  it('Generates a random string with the default length and the specifided caracters', async () => {
    for (let type = 1; type < 16; type++) {
      const params = {
        lower: type % 2 === 1,
        upper: (type >> 1) % 2 === 1,
        digits: (type >> 2) % 2 === 1,
        symbols: (type >> 3) % 2 === 1,
      }
      const globalString =
        (params.lower ? lowers : '') +
        (params.upper ? uppers : '') +
        (params.digits ? digits : '') +
        (params.symbols ? symbols : '')

      for (let index = 0; index < loops; index++) {
        const element = generateRandomString(params)
        expect(element.length).toBe(32)

        for (const char of element) {
          expect(globalString).toContain(char)
        }
      }
    }
  })

  it('throws an error if the all caracters are empty', () => {
    const emptySet = { digits: false, lower: false, upper: false, symbols: false }
    expect(() => generateRandomString(13, emptySet)).toThrow('You should at least enable a parameter')
    expect(() => generateRandomString(emptySet)).toThrow('You should at least enable a parameter')
  })

  it('Generates a random string with the specified length and all type of characters', () => {
    const randomInt = Math.floor(Math.random() * 1000)
    for (let index = 0; index < 100; index++) {
      const element = generateRandomString(randomInt)
      expect(element.length).toBe(randomInt)
    }
  })

  it('Generates a random string with the specified length and the specifided caracters', () => {
    for (let type = 1; type < 16; type++) {
      const params = {
        lower: type % 2 === 1,
        upper: (type >> 1) % 2 === 1,
        digits: (type >> 2) % 2 === 1,
        symbols: (type >> 3) % 2 === 1,
      }
      const globalString =
        (params.lower ? lowers : '') +
        (params.upper ? uppers : '') +
        (params.digits ? digits : '') +
        (params.symbols ? symbols : '')

      for (let index = 0; index < loops; index++) {
        const randomInt = Math.floor(Math.random() * 1000)
        const element = generateRandomString(randomInt, params)
        expect(element.length).toBe(randomInt)

        for (const char of element) {
          expect(globalString).toContain(char)
        }
      }
    }
  })
})
