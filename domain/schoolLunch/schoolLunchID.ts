import uuid from '~~/tools/uuid'

export class SchoolLunchID {
  private _value: string

  get value () { return this._value }

  private constructor (value: string) {
    this._value = value
  }

  /**
   * new
   */
  public static new () {
    return new this(uuid())
  }

  /**
   * DBなどのデータから再構築する
   */
  public static reconstruct (id: string) {
    return new this(id)
  }
}
