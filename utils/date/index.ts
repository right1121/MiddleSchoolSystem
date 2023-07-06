import { parseISO } from 'date-fns'
import { zeroPadding } from '../num';

const parse = (datestr: string): Date => {
  const d = parseISO(datestr);

  const month = zeroPadding(2, d.getMonth() +1)
  const day = zeroPadding(2, d.getDate())

  const hour = zeroPadding(2, d.getHours())
  const minutes = zeroPadding(2, d.getMinutes())
  const seconds = zeroPadding(2, d.getSeconds())

  const s = `${ d.getFullYear() }-${ month }-${ day }T${ hour }:${ minutes }:${ seconds }Z`;
  return parseISO(s)
}

export { parse }
