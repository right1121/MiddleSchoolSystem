export class SchoolLunchID {
  private _value: string

  get value() { return this._value }

  private constructor(value: string) {
    this._value = value
  }

  /**
   * new
   */
  public static new() {
    return new this(generateUuid())
  }

  /**
   * new
   */
  public static create(id: string) {
    return new this(id)
  }
}

function generateUuid() {
  let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
  for (let i = 0, len = chars.length; i < len; i++) {
      switch (chars[i]) {
          case "x":
              chars[i] = Math.floor(Math.random() * 16).toString(16);
              break;
          case "y":
              chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
              break;
      }
  }
  return chars.join("");
}
