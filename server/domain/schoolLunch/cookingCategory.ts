export class CookingCategory {
  private _isStaple: boolean
  private _isMainDish: boolean
  private _isSideDish: boolean

  /**主食か */
  get isStaple() { return this.isStaple }
  /**主菜か */
  get isMainDish() { return this.isMainDish }
  /**副菜か */
  get isSideDish() { return this.isSideDish }

  private constructor(isStaple: boolean, isMainDish: boolean, isSideDish: boolean) {
    // 追加バリデーションチェックを追加する
    this._isStaple = isStaple
    this._isMainDish = isMainDish
    this._isSideDish = isSideDish
  }

  /**
  * new
  */
  public static new(isStaple: boolean, isMainDish: boolean, isSideDish: boolean) {
    return new this(isStaple, isMainDish, isSideDish)
  }

  /**
   * DBなどのデータから再構築する
   */
  public static reconstruct(isStaple: boolean, isMainDish: boolean, isSideDish: boolean) {
    return new this(isStaple, isMainDish, isSideDish)
  }
}