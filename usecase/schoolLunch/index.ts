import ISchoolLunchRepository from '~~/server/domain/schoolLunch/ISchoolLunchRepository'

const list = (
  schoolLunchRepository: ISchoolLunchRepository
) => {
  return schoolLunchRepository.find()
}

export { list }
