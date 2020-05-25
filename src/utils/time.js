export function renderTime(d) {
  var da= new Date(d)
  var year = da.getFullYear()
  var month = (da.getMonth() + 1 < 10 ? '0'+ (da.getMonth() + 1) : da.getMonth() + 1)
  var date =  (da.getDate()< 10 ? '0'+ (da.getDate()) : da.getDate())
  var hour =  (da.getHours()< 10 ? '0'+ (da.getHours()) : da.getHours())
  var minute =  (da.getMinutes() < 10 ? '0'+ (da.getMinutes()) : da.getMinutes())
  var second = (da.getSeconds() < 10 ? '0'+ (da.getSeconds()) : da.getSeconds())
  return year + '-' +month+ '-' +date+ ' ' +hour+ ':' +minute+ ':' +second
}
