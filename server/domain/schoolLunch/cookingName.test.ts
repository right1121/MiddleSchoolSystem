import { describe, expect, test } from 'vitest'
import { CookingName } from './CookingName'

describe('CookingName 生成', () => {
  describe.each([
    { value: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお' },
    { value: 'あ' },
    { value: 'ア' }
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
    { value: 'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあ', message: '50文字以下にしてください。' },
    { value: '123456', message: '以下の文字は使用できません。 123456' },
    { value: 'あいう123えお@@', message: '以下の文字は使用できません。 123@@' }
  ])('異常系', ({ value, message }) => {
    test(`new value: ${value}, `, () => {
      expect(() => CookingName.new(value)).toThrowError(`${message} {"_value":"${value}"}`)
    })
    test(`reconstruct value: ${value}, `, () => {
      expect(() => CookingName.reconstruct(value)).toThrowError(`${message} {"_value":"${value}"}`)
    })
  })
})
