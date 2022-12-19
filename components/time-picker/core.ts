const makeArray = (length: number) =>
  Array.from(new Array(length), (_, i) => (i < 10 ? `0${i}` : `${i}`))

export const hours = makeArray(25)

export const minutes = makeArray(60)

export const seconds = makeArray(60)

export const transformTimeWithSeconds = (time: string) => {
  const strings = time.split(":")
  if (strings.length === 2) {
    return `${time}:00`
  }
  return time
}

export const isLegalTimeString = ({
  time,
  onlyHour,
}: {
  time: string
  onlyHour?: boolean
}) => {
  if (time.trim() === "") {
    return true
  }
  const strings = transformTimeWithSeconds(time).split(":")
  if (
    strings.length === 3 &&
    strings[0].length === 2 &&
    strings[1].length === 2 &&
    strings[2].length === 2 &&
    !isNaN(Number(strings[0])) &&
    !isNaN(Number(strings[1])) &&
    !isNaN(Number(strings[2]))
  ) {
    const hour = parseInt(strings[0], 10)
    const minute = parseInt(strings[1], 10)
    const second = parseInt(strings[2], 10)
    // 整点选择 onlyHour 时判断逻辑不一样
    if (onlyHour) {
      return hour > -1 && hour < 25 && minute === 0
    }
    return (
      hour > -1 &&
      hour < 25 &&
      minute > -1 &&
      minute < 60 &&
      second > -1 &&
      second < 60
    )
  }
  return false
}

export const extractHMSFromTime = (time?: string | null) => {
  if (!time) {
    return {
      hour: null,
      minute: null,
      second: null,
    }
  }
  const [hour, minute, second] = time.split(":")
  return {
    hour: hour || null,
    minute: minute || null,
    second: second || null,
  }
}

// t1 是否在 t2 后
export const isTimeAfter = (t1?: string | null, t2?: string | null) => {
  if (
    !t1 ||
    !isLegalTimeString({ time: t1 }) ||
    !t2 ||
    !isLegalTimeString({ time: t2 })
  ) {
    return false
  }
  const {
    hour: t1Hour,
    minute: t1Minute,
    second: t1Second,
  } = extractHMSFromTime(t1)
  const {
    hour: t2Hour,
    minute: t2Minute,
    second: t2Second,
  } = extractHMSFromTime(t2)
  if (t1Hour && t2Hour && parseInt(t1Hour, 10) !== parseInt(t2Hour, 10)) {
    return t1Hour > t2Hour
  }
  if (
    t1Minute &&
    t2Minute &&
    parseInt(t1Minute, 10) !== parseInt(t2Minute, 10)
  ) {
    return t1Minute > t2Minute
  }
  return t1Second && t2Second && parseInt(t1Second, 10) > parseInt(t2Second, 10)
}

// t1 是否在 t2 前
export const isTimeBefore = (t1?: string | null, t2?: string | null) => {
  if (
    !t1 ||
    !isLegalTimeString({ time: t1 }) ||
    !t2 ||
    !isLegalTimeString({ time: t2 })
  ) {
    return false
  }
  const {
    hour: t1Hour,
    minute: t1Minute,
    second: t1Second,
  } = extractHMSFromTime(t1)
  const {
    hour: t2Hour,
    minute: t2Minute,
    second: t2Second,
  } = extractHMSFromTime(t2)
  if (t1Hour && t2Hour && parseInt(t1Hour, 10) !== parseInt(t2Hour, 10)) {
    return t1Hour < t2Hour
  }
  if (
    t1Minute &&
    t2Minute &&
    parseInt(t1Minute, 10) !== parseInt(t2Minute, 10)
  ) {
    return t1Minute < t2Minute
  }
  return t1Second && t2Second && parseInt(t1Second, 10) < parseInt(t2Second, 10)
}
