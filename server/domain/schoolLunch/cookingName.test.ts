import { describe, expect, test } from 'vitest'
import { CookingName } from './CookingName'

describe('CookingName 生成', () => {
  describe.each([
    { value: '12345678901234567890123456789012345678901234567890' },
    { value: '1' },
    { value: 'あ' }
  ])('正常系', ({ value }) => {
    test(`new value: ${value}, `, () => {
      const category = CookingName.new(value)
      expect(category.value).toBe(value)
      expect(category.value).toBe(value)
      expect(category.value).toBe(value)
    })
    test(`reconstruct value: ${value}, `, () => {
      const category = CookingName.reconstruct(value)
      expect(category.value).toBe(value)
      expect(category.value).toBe(value)
      expect(category.value).toBe(value)
    })
  })

  describe.each([
    { value: '123456789012345678901234567890123456789012345678901', message: '50文字以下にしてください。' }
  ])('異常系', ({ value, message }) => {
    test(`new value: ${value}, `, () => {
      expect(() => CookingName.new(value)).toThrowError(`${message} {"_value":"${value}"}`)
    })
    test(`reconstruct value: ${value}, `, () => {
      expect(() => CookingName.reconstruct(value)).toThrowError(`${message} {"_value":"${value}"}`)
    })
  })
})
