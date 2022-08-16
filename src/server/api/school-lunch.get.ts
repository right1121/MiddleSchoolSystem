import { list } from '~~/usecase/schoolLunch'
import schoolLunchRepository from '~~/infra/schoolLunch'

export default defineEventHandler(async () => {
  const body = await list(schoolLunchRepository)
  return body
})
