import { format, fromUnixTime } from 'date-fns'

export const UI_DATE_FORMAT = 'dd.MM.yyyy'
export const ISO_FORMAT_DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm:ss'
export const ISO_FORMAT_DATE_TIME_FORMAT_WITHOUT_SECONDS = 'yyyy-MM-dd HH:mm'
export const TIME_FORMAT = 'HH:mm:ss'
export const SHORT_TIME_FORMAT = 'HH:mm'

export const formatISODateTime = (seconds: number) =>
  format(fromUnixTime(seconds), ISO_FORMAT_DATE_TIME_FORMAT)

export const formatISO = (date: Date) => format(date, ISO_FORMAT_DATE_TIME_FORMAT)

export const toUTCWithoutZoneOffset = (date: Date) => {
  return Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  )
}

export const getUTCOffset = () => {
  const offset = (new Date().getTimezoneOffset() * -1) / 60
  return offset === 0 ? 'UTC' : `UTC+${(new Date().getTimezoneOffset() * -1) / 60}`
}
