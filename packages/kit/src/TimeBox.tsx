import './TimeBox.scss'

import * as React from 'react'

import { formatISO } from '@vaisala/utils'

export function TimeBox() {
  const [dateTime, setDateTime] = React.useState(formatISO(new Date()))
  React.useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(formatISO(new Date()))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [setDateTime])

  return <div className="timebox">{dateTime}</div>
}
