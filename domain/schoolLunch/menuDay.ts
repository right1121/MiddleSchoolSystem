export class MenuDay {
  private _value: Date

  get value() { return this._value }

  private constructor(value: Date) {
    this._value = value
  }

  /**
   * new
   */
   public static new(menuDay: Date) {
    return new this(menuDay)
  }

  /**
   * DBなどのデータから再構築する
   */
  public static reconstruct(menuDay: Date) {
    return new this(menuDay)
  }
}
