import uuid from '~~/tools/uuid'

export class MenuID {
  private _value: string

  get value() { return this._value }

  private constructor(value: string) {
    this._value = value
  }

  /**
   * new
   */
  public static new() {
    return new this(uuid())
  }

  /**
   * new
   */
  public static reconstruct(id: string) {
    return new this(id)
  }
}
