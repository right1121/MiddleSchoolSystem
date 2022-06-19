import ISchoolLunchRepository from '~~/domain/schoolLunch/ISchoolLunchRepository'
import { SchoolLunch } from '~~/domain/schoolLunch'

const repository: ISchoolLunchRepository = {
  find() {
    return SchoolLunch.new()
  }
}

export default repository
