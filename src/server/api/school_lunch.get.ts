import { list } from '@/usecase/SchoolLunch/SchoolLunch'
import schoolLunchRepository from '@/infra/SchoolLunch/SchoolLunchRepository'

export default defineEventHandler(() => {
  return list(schoolLunchRepository)
})
