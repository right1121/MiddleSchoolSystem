const HiraganaRegExp = 'ぁ-ん'
const KatakanaRegExp = 'ァ-ヴー'
const KanjiRegExp = '一-龠'

export const isHiragana = (str: string): [boolean, string[] | null] => {
  const _regExp = new RegExp(`[^${HiraganaRegExp}]+`, 'g')
  const result = str.match(_regExp)
  return [!result?.length, result]
}

export const isKatakana = (str: string): [boolean, string[] | null] => {
  const _regExp = new RegExp(`[^${KatakanaRegExp}]+`, 'g')
  const result = str.match(_regExp)
  return [!result?.length, result]
}

export const isKanji = (str: string): [boolean, string[] | null] => {
  const _regExp = new RegExp(`[^${KanjiRegExp}]+`, 'g')
  const result = str.match(_regExp)
  return [!result?.length, result]
}

export const isNihongo = (str: string): [boolean, string[] | null] => {
  const _regExp = new RegExp(`[^${HiraganaRegExp}${KatakanaRegExp}${KanjiRegExp}]+`, 'g')
  const result = str.match(_regExp)
  return [!result?.length, result]
}
