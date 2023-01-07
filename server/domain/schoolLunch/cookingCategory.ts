export class CookingCategory {
  private _isStaple: boolean
  private _isMainDish: boolean
  private _isSideDish: boolean

  /** 主食か */
  get isStaple () { return this._isStaple }
  /** 主菜か */
  get isMainDish () { return this._isMainDish }
  /** 副菜か */
  get isSideDish () { return this._isSideDish }

  private constructor (isStaple: boolean, isMainDish: boolean, isSideDish: boolean) {
    this._isStaple = isStaple
    this._isMainDish = isMainDish
    this._isSideDish = isSideDish

    this._validate()
  }

  private _throwCookingCategoryParamInvalidError (message: string) {
    throw new Error(`${message} ${JSON.stringify(this)}`)
  }

  /**
   * バリデーションチェック
   * @returns バリデーションに通るならtrue
   */
  private _validate () {
    if (this.isStaple && this.isMainDish && this.isSideDish) {
      this._throwCookingCategoryParamInvalidError('すべてTrueにはできません。')
    } else if (!this.isStaple && !this.isMainDish && !this.isSideDish) {
      this._throwCookingCategoryParamInvalidError('すべてFalseにはできません。')
    } else if (this.isStaple && this.isSideDish) {
      this._throwCookingCategoryParamInvalidError('主食と副菜を同じカテゴリにすることはできません。')
    }
  }

  /**
  * new
  */
  public static new (isStaple: boolean, isMainDish: boolean, isSideDish: boolean) {
    return new this(isStaple, isMainDish, isSideDish)
  }

  /**
   * DBなどのデータから再構築する
   */
  public static reconstruct (isStaple: boolean, isMainDish: boolean, isSideDish: boolean) {
    return new this(isStaple, isMainDish, isSideDish)
  }
}
