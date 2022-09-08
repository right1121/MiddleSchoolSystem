import { PrismaClient } from '@prisma/client'
import ISchoolLunchRepository from '~~/domain/schoolLunch/ISchoolLunchRepository'
import { SchoolLunch } from '~~/domain/schoolLunch'

const prisma = new PrismaClient()

const repository: ISchoolLunchRepository = {
  async find() {
    const school_lunchs = await prisma.school_lunch.findMany()
    return school_lunchs.map((sl) => SchoolLunch.create({
      id: sl.school_lunch_id
    }))
  }
}

export default repository
