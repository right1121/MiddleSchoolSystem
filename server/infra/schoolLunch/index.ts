import { PrismaClient } from '@prisma/client'
import ISchoolLunchRepository from '~~/server/domain/schoolLunch/ISchoolLunchRepository'
import { SchoolLunch } from '~~/server/domain/schoolLunch'

const prisma = new PrismaClient()

const repository: ISchoolLunchRepository = {
  async list () {
    const schoolLunchs = await prisma.school_lunch.findMany()
    return schoolLunchs.map(sl => SchoolLunch.reconstruct({
      schoolLunchId: sl.school_lunch_id,
      date: sl.date,
      menus: []
    }))
  }
}

export default repository
