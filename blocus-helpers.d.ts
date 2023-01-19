export declare const lowers: string
export declare const uppers: string
export declare const digits: string
export declare const symbols: string

declare interface StringParams {
  lower?: boolean
  upper?: boolean
  digits?: boolean
  symbols?: boolean
}

export declare function isValidEmail(email: string): boolean
export declare function isValidPassword(password: string, params?: { length?: number } & StringParams): boolean
export declare function generateRandomString(param?: number | StringParams, params?: StringParams): string
