import { isValidEmail } from '.'

describe(`isValidEmail`, () => {
  it('Returns true if the email is valid', () => {
    const test = isValidEmail('user@exemple.com')
    expect(test).toBe(true)
  })
  it('Returns false if the email is missing @', () => {
    const test = isValidEmail('userexemple.com')
    expect(test).toBe(false)
  })
  it('Returns false if the email is missing domain', () => {
    const test = isValidEmail('user@')
    expect(test).toBe(false)
  })
  it('Returns false if the email is missing domain extention', () => {
    const test = isValidEmail('user@exemple')
    expect(test).toBe(false)
  })
  it('Returns false if the email is missing name', () => {
    const test = isValidEmail('@exemple.com')
    expect(test).toBe(false)
  })
})
