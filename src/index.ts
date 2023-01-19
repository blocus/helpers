export const lowers = 'abcdefghijklmnopqrstuvwxyz'
export const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const digits = '0123456789'
export const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

export const isValidEmail = (email: string): boolean => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email.toLowerCase()
  )
}

interface StringParams {
  lower?: boolean
  upper?: boolean
  digits?: boolean
  symbols?: boolean
}

export const isValidPassword = (password: string, params?: { length?: number } & StringParams): boolean => {
  const minLength = params?.length || 8

  if (password.length < minLength) return false
  if (params?.lower !== false && password.split('').filter(char => lowers.includes(char)).length === 0) return false
  if (params?.upper !== false && password.split('').filter(char => uppers.includes(char)).length === 0) return false
  if (params?.digits !== false && password.split('').filter(char => digits.includes(char)).length === 0) return false
  if (params?.symbols !== false && password.split('').filter(char => symbols.includes(char)).length === 0) return false
  return true
}

export const generateRandomString = (param?: number | StringParams, params?: StringParams): string => {
  const useLowers = typeof param === 'number' ? params?.lower !== false : param?.lower !== false
  const useUppers = typeof param === 'number' ? params?.upper !== false : param?.upper !== false
  const useDigits = typeof param === 'number' ? params?.digits !== false : param?.digits !== false
  const useSymbols = typeof param === 'number' ? params?.symbols !== false : param?.symbols !== false

  const globalString =
    (useLowers ? lowers : '') + (useUppers ? uppers : '') + (useDigits ? digits : '') + (useSymbols ? symbols : '')

  if (globalString.length === 0) {
    throw new Error('You should at least enable a parameter')
  }

  return Array.from({ length: typeof param === 'number' ? param : 32 })
    .map(() => globalString[Math.floor(Math.random() * globalString.length)])
    .join('')
}
