export class CookingName {
  private _value: string

  get value() { return this._value }

  private constructor(value: string) {
    this._value = value
  }

  /**
   * new
   */
  public static new(cookingName: string) {
    return new this(cookingName)
  }

  /**
   * DBなどのデータから再構築する
   */
  public static reconstruct(cookingName: string) {
    return new this(cookingName)
  }
}
