import { list } from '~~/usecase/schoolLunch'
import schoolLunchRepository from '~~/server/infra/schoolLunch'

export default defineEventHandler(() => {
  return list(schoolLunchRepository)
})
