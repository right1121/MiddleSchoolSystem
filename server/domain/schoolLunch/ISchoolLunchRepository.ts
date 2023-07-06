import { SchoolLunch } from '.'
import { SchoolLunchDate  } from './schoolLunchDate';

export default interface ISchoolLunchRepository {
  list(): Promise<SchoolLunch[]>
  listByDate(date: SchoolLunchDate): Promise<SchoolLunch | undefined>
}
