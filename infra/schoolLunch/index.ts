import { PrismaClient } from '@prisma/client'
import ISchoolLunchRepository from '~~/domain/schoolLunch/ISchoolLunchRepository'
import { SchoolLunch } from '~~/domain/schoolLunch'

const prisma = new PrismaClient()

const repository: ISchoolLunchRepository = {
  async find () {
    const schoolLunchs = await prisma.school_lunch.findMany()
    return schoolLunchs.map(sl => SchoolLunch.create({
      id: sl.school_lunch_id
    }))
  }
}

export default repository
