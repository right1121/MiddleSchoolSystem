import { SchoolLunch } from './SchoolLunch'

export default interface ISchoolLunchRepository {
  find(): SchoolLunch
}
