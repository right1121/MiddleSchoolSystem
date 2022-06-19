import ISchoolLunchRepository from '~~/domain/SchoolLunch/ISchoolLunchRepository'

const list = (
  schoolLunchRepository: ISchoolLunchRepository
) => {
  return schoolLunchRepository.find()
}

export { list }
