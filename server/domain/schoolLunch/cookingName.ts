export class CookingName {
  private _value: string
  #maxLength = 50

  get value () { return this._value }

  private constructor (value: string) {
    this._value = value
    this.#validate()
  }

  #validate () {
    if (this.value.length > this.#maxLength) {
      throw new Error(`${this.#maxLength}文字以下にしてください。 ${JSON.stringify(this)}`)
    }
  }

  /**
   * new
   */
  public static new (cookingName: string) {
    return new this(cookingName)
  }

  /**
   * DBなどのデータから再構築する
   */
  public static reconstruct (cookingName: string) {
    return new this(cookingName)
  }
}
