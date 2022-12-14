export class SchoolLunchDate {
  private _value: Date

  get value() { return this._value }

  private constructor(value: Date) {
    this._value = value
  }

  /**
   * new
   */
   public static new(schoolLunchDate: Date) {
    return new this(schoolLunchDate)
  }

  /**
   * DBなどのデータから再構築する
   */
  public static reconstruct(schoolLunchDate: Date) {
    return new this(schoolLunchDate)
  }
}
