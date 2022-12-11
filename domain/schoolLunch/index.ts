import { SchoolLunchID } from './SchoolLunchID'

export interface Input {
  id: string
}

export class SchoolLunch {
  id: SchoolLunchID

  private constructor (id: SchoolLunchID) {
    this.id = id
  }

  /**
   * new
   */
  public static new () {
    const id = SchoolLunchID.new()
    return new this(id)
  }

  /**
   * create
   */
  public static create (input: Input) {
    const id = SchoolLunchID.create(input.id)
    return new this(id)
  }
}
