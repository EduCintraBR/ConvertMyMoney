const getCurrentDate = () => {
  const today = new Date()
  const currentDate =
    (today.getMonth() + 1) + '-' + today.getDate()  + '-' + today.getFullYear()
  return currentDate
}

module.exports = { getCurrentDate }