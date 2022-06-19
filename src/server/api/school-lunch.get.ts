import { list } from '~~/usecase/schoolLunch'
import schoolLunchRepository from '~~/infra/schoolLunch'

export default defineEventHandler(() => {
  return list(schoolLunchRepository)
})
