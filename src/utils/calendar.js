const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/**
 * Builds a flat array representing a month grid (Sun–Sat rows).
 * Leading/trailing nulls pad the grid to full weeks.
 */
export function buildMonthGrid(dateISO) {
  const date = new Date(dateISO)
  const year = date.getFullYear()
  const month = date.getMonth()
  const targetDay = date.getDate()

  const firstOfMonth = new Date(year, month, 1)
  const startWeekday = firstOfMonth.getDay() // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells = []
  for (let i = 0; i < startWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)

  return {
    cells,
    targetDay,
    monthName: MONTHS[month],
    year,
    weekdays: WEEKDAYS,
  }
}
