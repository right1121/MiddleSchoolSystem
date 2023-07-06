import { list } from '~~/server/usecase/schoolLunch'
import schoolLunchRepository from '~~/server/infra/schoolLunch'

/**
 * 献立取得API
 * 
 * プレゼンテーション層
 * server/api/school-lunch.get.ts
 *   string -> cookingID
 * 
 * ユースケース層
 * server/usecase/schoolLunch/index.ts
 *  cookingID -> ISchoolLunchRepository.ts
 * 
 * ドメイン層
 * server/domain/schoolLunch/ISchoolLunchRepository.ts
 * 
 * インフラ層
 * server/infra/schoolLunch/index.ts
 * 
 * server/test/infra/schoolLunch/index.ts
 */

export default defineEventHandler(async (event) => {
  const body = await list(schoolLunchRepository)
  return body
})
