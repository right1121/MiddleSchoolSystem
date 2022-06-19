import { list } from '~~/usecase/schoolLunch/schoolLunch'
import schoolLunchRepository from '~~/infra/schoolLunch/schoolLunchRepository'

export default defineEventHandler(() => {
  return list(schoolLunchRepository)
})
