const HiraganaRegExp = 'ぁ-ん'
const KatakanaRegExp = 'ァ-ヴー'
const KanjiRegExp = '一-龠'
const NumRegExp = '0-9'
const SmallCaseAlphabetRegExp = 'a-z'
const UpperCaseAlphabetRegExp = 'A-Z'
const AlphabetRegExp = `${SmallCaseAlphabetRegExp}${UpperCaseAlphabetRegExp}`
const symbolRegExp = '!"#$%&\'()=~|`{}\\[\\]「」【】+\\*/_\\\\@.,<>'

type validateFunction = (str: string) => [boolean, string[]]

const __matchAllowString = (str: string, regExp: RegExp): [boolean, string[]] => {
  const result = str.match(regExp)
  return [!result?.length, result || []]
}

export const isHiragana: validateFunction = (str: string) => {
  const _regExp = new RegExp(`[^${HiraganaRegExp}]+`, 'g')
  return __matchAllowString(str, _regExp)
}

export const isKatakana: validateFunction = (str: string) => {
  const _regExp = new RegExp(`[^${KatakanaRegExp}]+`, 'g')
  return __matchAllowString(str, _regExp)
}

export const isKanji: validateFunction = (str: string) => {
  const _regExp = new RegExp(`[^${KanjiRegExp}]+`, 'g')
  return __matchAllowString(str, _regExp)
}

export const isNihongo: validateFunction = (str: string) => {
  const _regExp = new RegExp(`[^${HiraganaRegExp}${KatakanaRegExp}${KanjiRegExp}]+`, 'g')
  return __matchAllowString(str, _regExp)
}

/** 名前系で利用可能な文字列か */
export const isAvailableByName: validateFunction = (str: string) => {
  const _regExp = new RegExp(`[^${HiraganaRegExp}${KatakanaRegExp}${KanjiRegExp}${AlphabetRegExp}]+`, 'g')
  return __matchAllowString(str, _regExp)
}

/** 利用可能文字列か */
export const isAvailableString: validateFunction = (str: string) => {
  const _regExp = new RegExp(`[^${HiraganaRegExp}${KatakanaRegExp}${KanjiRegExp}${NumRegExp}${AlphabetRegExp}${symbolRegExp}]+`, 'g')
  return __matchAllowString(str, _regExp)
}
