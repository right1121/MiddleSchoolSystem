import ISchoolLunchRepository from '~~/domain/schoolLunch/ISchoolLunchRepository'

const list = (
  schoolLunchRepository: ISchoolLunchRepository
) => {
  return schoolLunchRepository.find()
}

export { list }
