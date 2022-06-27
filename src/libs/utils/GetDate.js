export function getDateWithDayAndYear(date) {
  return new Date(date).toLocaleString('id-ID', {
    timeZone: 'Asia/Makassar',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
