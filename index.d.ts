declare module 'blocus-helpers' {
  export const lowers: string
  export const uppers: string
  export const digits: string
  export const symbols: string

  export interface StringParams {
    lower?: boolean
    upper?: boolean
    digits?: boolean
    symbols?: boolean
  }

  export function isValidEmail(email: string): boolean
  export function isValidPassword(password: string, params?: { length?: number } & StringParams): boolean
  export function generateRandomString(param?: number | StringParams, params?: StringParams): string
}
