import { parse } from '~~/utils/date';
import { SchoolLunchDate } from '~~/server/domain/schoolLunch/schoolLunchDate';
import { getMonthMenu } from '~~/server/usecase/schoolLunch';
import repository from '~~/server/infra/schoolLunch';

export default defineEventHandler(async (event) => {

    // Date型に変換
    const date = parse(event.context.params!.targetYearMonth);

    // バリデーションチェック
    if (Number.isNaN(date.getTime())) {
      console.warn('不正なパスパラメータ', '[targetYearMonth]: ', event.context.params!.targetYearMonth, date.getTime())
      throw createError({
        statusCode: 400,
        message: '不正なパラメータです。',
      })
    }

    // バリューオブジェクトへの変換
    const valueDate = SchoolLunchDate.new(date);

    // ユースケースを呼び出しレスポンスを受け取る
    const res = await getMonthMenu(repository, valueDate);
    if (res === undefined) {
      return undefined;
    }
    
    return res;
})

// １．ユーザーが入力したデータが正しいか検査
// ２．inputデータをバリューオブジェクトに変換
    // targetYearMonthをserver/domain/schoolLunch/schoolLunchDate.tsに変換
// ３．ユースケースを呼ぶ
// ４．帰ってきたデータを成型（json型かなにか）する
// ５．成型データを返却
