import { lunch_cooking as lunchCookingModel, lunch_menu as lunchMenuModel, PrismaClient, school_lunch as schoolLunchModel } from '@prisma/client'
import ISchoolLunchRepository from '~~/server/domain/schoolLunch/ISchoolLunchRepository'
import { SchoolLunch } from '~~/server/domain/schoolLunch'
import { SchoolLunchDate } from '~~/server/domain/schoolLunch/schoolLunchDate'

const prisma = new PrismaClient()

type ResponseModel = schoolLunchModel & {
  lunch_menu: (lunchMenuModel & {
      cooking: lunchCookingModel[];
  })[]
}

const toModel = (model: ResponseModel): SchoolLunch => {
  return SchoolLunch.reconstruct({
    schoolLunchId: model.school_lunch_id,
    date: model.date,
    menus: model.lunch_menu.map((menu) => {
      return {
        schoolLunchId: menu.school_lunch_id,
        menuId: menu.menu_id,
        day: menu.day,
        cookingList: menu.cooking.map((cooking) => {
          return {
            cookingId: cooking.cooking_id,
            menuId: cooking.menu_id,
            cookingName: cooking.cooking_name || '',
            isStaple: Boolean(cooking.staple_flg),
            isMainDish: Boolean(cooking.main_dish_flg),
            isSideDish: Boolean(cooking.side_dish_flg)
          }
        })
      }
    })
  })
}

const repository: ISchoolLunchRepository = {
  async list () {
    const schoolLunchs = await prisma.school_lunch.findMany()
    return schoolLunchs.map(sl => SchoolLunch.reconstruct({
      schoolLunchId: sl.school_lunch_id,
      date: sl.date,
      menus: []
    }))
  },
  async listByDate (date: SchoolLunchDate) {
    console.log(date.value.toString())
    const schoolLunchsRecord = await prisma.school_lunch.findFirst({
      include: {
        lunch_menu: {
          include: {
            cooking: true
          }
        }
      },
      where: {
        date: date.value
      }
    })
    if (!schoolLunchsRecord) {
      return undefined
    }

    const schoolLunch = toModel(schoolLunchsRecord)
    return schoolLunch;
  }
}

export default repository
