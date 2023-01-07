import { describe, expect, test } from 'vitest'
import { CookingCategory } from './cookingCategory'

describe('CookingCategory生成', () => {
  describe.each([
    { isStaple: true, isMainDish: false, isSideDish: false },
    { isStaple: false, isMainDish: true, isSideDish: false },
    { isStaple: false, isMainDish: false, isSideDish: true }
  ])('正常系', ({ isStaple, isMainDish, isSideDish }) => {
    test(`new 主食: ${isStaple}, 主菜: ${isMainDish}, 副菜: ${isSideDish}, `, () => {
      const category = CookingCategory.new(isStaple, isMainDish, isSideDish)
      expect(category.isStaple).toBe(isStaple)
      expect(category.isMainDish).toBe(isMainDish)
      expect(category.isSideDish).toBe(isSideDish)
    })

    test(`reconstruct 主食: ${isStaple}, 主菜: ${isMainDish}, 副菜: ${isSideDish}, `, () => {
      const category = CookingCategory.reconstruct(isStaple, isMainDish, isSideDish)
      expect(category.isStaple).toBe(isStaple)
      expect(category.isMainDish).toBe(isMainDish)
      expect(category.isSideDish).toBe(isSideDish)
    })
  })

  describe.each([
    { isStaple: true, isMainDish: false, isSideDish: true, message: '主食と副菜を同じカテゴリにすることはできません。' },
    { isStaple: false, isMainDish: false, isSideDish: false, message: 'すべてFalseにはできません。' },
    { isStaple: true, isMainDish: true, isSideDish: true, message: 'すべてTrueにはできません。' }
  ])('異常系', ({ isStaple, isMainDish, isSideDish, message }) => {
    test(`new 主食: ${isStaple}, 主菜: ${isMainDish}, 副菜: ${isSideDish}, `, () => {
      expect(() => CookingCategory.new(isStaple, isMainDish, isSideDish)).toThrowError(`${message} {"_isStaple":${isStaple},"_isMainDish":${isMainDish},"_isSideDish":${isSideDish}}`)
    })

    test(`reconstruct 主食: ${isStaple}, 主菜: ${isMainDish}, 副菜: ${isSideDish}, `, () => {
      expect(() => CookingCategory.reconstruct(isStaple, isMainDish, isSideDish)).toThrowError(`${message} {"_isStaple":${isStaple},"_isMainDish":${isMainDish},"_isSideDish":${isSideDish}}`)
    })
  })
})
