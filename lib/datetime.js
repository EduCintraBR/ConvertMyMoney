const getCurrentDate = () => {
  const today = new Date()
  const currentDate =
    ("00" + (today.getMonth() + 1)).slice(-2) + '-' + ("00" + (today.getDate())).slice(-2)  + '-' + today.getFullYear()
    
  return currentDate
}

module.exports = { getCurrentDate }