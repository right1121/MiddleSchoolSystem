import ISchoolLunchRepository from '~~/domain/SchoolLunch/ISchoolLunchRepository'
import { SchoolLunch } from '~~/domain/SchoolLunch/SchoolLunch'

const repository: ISchoolLunchRepository = {
  find() {
    return SchoolLunch.new()
  }
}

export default repository
