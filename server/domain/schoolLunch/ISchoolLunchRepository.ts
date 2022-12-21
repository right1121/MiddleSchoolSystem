import { SchoolLunch } from '.'

export default interface ISchoolLunchRepository {
  list(): Promise<SchoolLunch[]>
}
