import { CookingID } from './cookingID'
import { CookingName } from './cookingName'
import { CookingCategory } from './CookingCategory'
import { MenuDay } from './menuDay'
import { MenuID } from './menuID'
import { SchoolLunchDate } from './schoolLunchDate'
import { SchoolLunchID } from './SchoolLunchID'

export interface CookingInput {
  cookingName: string
  isStaple: boolean
  isMainDish: boolean
  isSideDish: boolean
}

export interface MenuInput {
  day: Date
  cookingList: CookingInput[]
}

export interface SchoolLunchInput {
  date: Date
  menus: MenuInput[]
}

export interface CookingDto {
  cookingId: string
  menuId: string
  cookingName: string
  isStaple: boolean
  isMainDish: boolean
  isSideDish: boolean
}

export interface MenuDto {
  menuId: string
  schoolLunchId: string
  day: Date
  cookingList: CookingDto[]
}

export interface SchoolLunchDto {
  schoolLunchId: string
  date: Date
  menus: MenuDto[]
}

/**
 * 給食モデル
 */
export class SchoolLunch {
  /**給食ID */
  schoolLunchId: SchoolLunchID
  /** 年月 */
  date: SchoolLunchDate
  /** 献立モデル */
  menus: Menu[]

  private constructor(id: SchoolLunchID, date: SchoolLunchDate, menus: Menu[]) {
    this.schoolLunchId = id
    this.date = date
    this.menus = menus
  }

  /**
   * new
   */
  public static new(input: SchoolLunchInput) {
    const id = SchoolLunchID.new()
    const date = SchoolLunchDate.new(input.date)
    const menus = input.menus.map(menu => Menu.new(id, menu))
    return new this(id, date, menus)
  }

  /**
   * DBなどのデータから再構築する
   */
  public static reconstruct(input: SchoolLunchDto) {
    const id = SchoolLunchID.reconstruct(input.schoolLunchId)
    const date = SchoolLunchDate.reconstruct(input.date)
    const menus = input.menus.map(menu => Menu.reconstruct(menu))
    return new this(id, date, menus)
  }
}

/**
 * 献立モデル
 */
class Menu {
  /**献立ID */
  menuId: MenuID
  /**給食ID */
  schoolLunchId: SchoolLunchID
  /**日付(1~31日) */
  day: MenuDay
  /** 料理モデル */
  cookingList: Cooking[]

  private constructor(id: MenuID, schoolLunchId: SchoolLunchID, day: MenuDay, cookingList: Cooking[]) {
    this.menuId = id
    this.schoolLunchId = schoolLunchId
    this.day = day
    this.cookingList = cookingList
  }

  /**
   * new
   */
  public static new(schoolLunchId: SchoolLunchID, menuInput: MenuInput) {
    const id = MenuID.new()
    const day = MenuDay.new(menuInput.day)
    const cookingList = menuInput.cookingList.map(cooking => Cooking.new(id, cooking))
    return new this(id, schoolLunchId, day, cookingList)
  }

  /**
   * DBなどのデータから再構築する
   */
  public static reconstruct(input: MenuDto) {
    const id = MenuID.reconstruct(input.menuId)
    const schoolLunchId = SchoolLunchID.reconstruct(input.schoolLunchId)
    const day = MenuDay.reconstruct(input.day)

    const cookingList = input.cookingList.map(cooking => Cooking.reconstruct(cooking))

    return new this(id, schoolLunchId, day, cookingList)
  }
}

/**
 * 料理モデル
 */
class Cooking {
  /** 料理ID */
  cookingId: CookingID
  /** 献立ID */
  menuId: MenuID
  /** 料理名 */
  cookingName: CookingName
  /** カテゴリ */
  cookingCategory: CookingCategory

  /**日付(1~31日) */
  day: MenuDay

  private constructor(
    id: CookingID,
    menuId: MenuID,
    cookingName: CookingName,
    cookingCategory: CookingCategory
  ) {
    this.cookingId = id
    this.menuId = menuId
    this.cookingName = cookingName
    this.cookingCategory = cookingCategory
  }

  /**
   * new
   */
  public static new(menuId: MenuID, cookingInput: CookingInput) {
    const id = CookingID.new()
    const cookingName = CookingName.new(cookingInput.cookingName)
    const cookingCategory = CookingCategory.new(cookingInput.isStaple, cookingInput.isMainDish, cookingInput.isMainDish)
    return new this(id, menuId, cookingName, cookingCategory)
  }

  /**
   * DBなどのデータから再構築する
   */
  public static reconstruct(input: CookingDto) {
    const id = CookingID.reconstruct(input.cookingId)
    const menuId = MenuID.reconstruct(input.menuId)
    const name = CookingName.reconstruct(input.cookingName)
    const category = CookingCategory.reconstruct(input.isStaple, input.isMainDish, input.isSideDish)
    return new this(
      id,
      menuId,
      name,
      category
    )
  }
}
