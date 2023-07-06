import ISchoolLunchRepository from '~~/server/domain/schoolLunch/ISchoolLunchRepository'
import { SchoolLunchDate } from '~~/server/domain/schoolLunch/schoolLunchDate';


const list = (
  schoolLunchRepository: ISchoolLunchRepository
) => {
  return schoolLunchRepository.list()
}

const getMonthMenu = async (
  schoolLunchRepository: ISchoolLunchRepository,
  date: SchoolLunchDate
) => {
  const schoolLunch = await schoolLunchRepository.listByDate(date);
  return schoolLunch;
}

export { list, getMonthMenu }
