import { SchoolLunch } from '.'

export default interface ISchoolLunchRepository {
  find(): Promise<SchoolLunch>
}
