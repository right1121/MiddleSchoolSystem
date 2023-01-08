import { describe, expect, test } from 'vitest'
import { isHiragana, isKatakana, isKanji, isNihongo, isAvailableByName, isAvailableString } from './index'

describe('ひらがなチェック', () => {
  describe.each([
    { value: 'あ' },
    { value: 'あいうえお' }
  ])('正常系', ({ value }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isHiragana(value)
      expect(result).toBeTruthy()
      expect(errors).toHaveLength(0)
    })
  })

  describe.each([
    { value: 'a', errorStrs: ['a'] },
    { value: '1', errorStrs: ['1'] },
    { value: 'ア', errorStrs: ['ア'] },
    { value: '亜', errorStrs: ['亜'] },
    { value: 'あ亜ア', errorStrs: ['亜ア'] },
    { value: '亜あア', errorStrs: ['亜', 'ア'] }
  ])('異常系', ({ value, errorStrs }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isHiragana(value)
      expect(result).toBeFalsy()
      expect(errors).toStrictEqual(errorStrs)
    })
  })
})

describe('カタカナチェック', () => {
  describe.each([
    { value: 'ア' },
    { value: 'アイウエオ' },
    { value: 'カーブ' }
  ])('正常系', ({ value }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isKatakana(value)
      expect(result).toBeTruthy()
      expect(errors).toHaveLength(0)
    })
  })

  describe.each([
    { value: 'a', errorStrs: ['a'] },
    { value: '1', errorStrs: ['1'] },
    { value: 'あ', errorStrs: ['あ'] },
    { value: '亜', errorStrs: ['亜'] },
    { value: 'あ亜ア', errorStrs: ['あ亜'] },
    { value: '亜アあ', errorStrs: ['亜', 'あ'] }
  ])('異常系', ({ value, errorStrs }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isKatakana(value)
      expect(result).toBeFalsy()
      expect(errors).toStrictEqual(errorStrs)
    })
  })
})

describe('漢字チェック', () => {
  describe.each([
    { value: '亜' },
    { value: '亜位宇江尾' }
  ])('正常系', ({ value }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isKanji(value)
      expect(result).toBeTruthy()
      expect(errors).toHaveLength(0)
    })
  })

  describe.each([
    { value: 'a', errorStrs: ['a'] },
    { value: '1', errorStrs: ['1'] },
    { value: 'あ', errorStrs: ['あ'] },
    { value: 'ア', errorStrs: ['ア'] },
    { value: 'あ亜ア', errorStrs: ['あ', 'ア'] },
    { value: '亜アあ', errorStrs: ['アあ'] }
  ])('異常系', ({ value, errorStrs }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isKanji(value)
      expect(result).toBeFalsy()
      expect(errors).toStrictEqual(errorStrs)
    })
  })
})

describe('日本語チェック', () => {
  describe.each([
    { value: 'あ' },
    { value: 'ア' },
    { value: '亜' },
    { value: 'あ亜ア' }
  ])('正常系', ({ value }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isNihongo(value)
      expect(result).toBeTruthy()
      expect(errors).toHaveLength(0)
    })
  })

  describe.each([
    { value: 'a', errorStrs: ['a'] },
    { value: '1', errorStrs: ['1'] },
    { value: 'あ1い', errorStrs: ['1'] },
    { value: 'ABC亜位宇', errorStrs: ['ABC'] },
    { value: '亜A位B宇C', errorStrs: ['A', 'B', 'C'] }
  ])('異常系', ({ value, errorStrs }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isNihongo(value)
      expect(result).toBeFalsy()
      expect(errors).toStrictEqual(errorStrs)
    })
  })
})

describe('名前チェック', () => {
  describe.each([
    { value: 'あ' },
    { value: 'ア' },
    { value: '亜' },
    { value: 'a' },
    { value: 'あ亜アa' }
  ])('正常系', ({ value }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isAvailableByName(value)
      expect(result).toBeTruthy()
      expect(errors).toHaveLength(0)
    })
  })

  describe.each([
    { value: '1', errorStrs: ['1'] },
    { value: '@', errorStrs: ['@'] },
    { value: 'あ1い', errorStrs: ['1'] },
    { value: 'ABC@亜位宇', errorStrs: ['@'] },
    { value: '@亜A位B\\宇C', errorStrs: ['@', '\\'] }
  ])('異常系', ({ value, errorStrs }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isAvailableByName(value)
      expect(result).toBeFalsy()
      expect(errors).toStrictEqual(errorStrs)
    })
  })
})

describe('全文字チェック', () => {
  describe.each([
    { value: 'あ' },
    { value: 'ア' },
    { value: '亜' },
    { value: '@' },
    { value: '.' },
    { value: 'a' },
    { value: 'あ亜アa@' }
  ])('正常系', ({ value }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isAvailableString(value)
      expect(result).toBeTruthy()
      expect(errors).toHaveLength(0)
    })
  })

  describe.each([
    { value: ';', errorStrs: [';'] },
    { value: '@亜§A位B\\Π宇C', errorStrs: ['§', 'Π'] }
  ])('異常系', ({ value, errorStrs }) => {
    test(`value: ${value}, `, () => {
      const [result, errors] = isAvailableString(value)
      expect(errors).toStrictEqual(errorStrs)
      expect(result).toBeFalsy()
    })
  })
})
