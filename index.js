// Code your solution in this file!
const logDriverNames = function (arr) {
  arr.forEach(function (el){console.log(el.name) })
}

const logDriversByHometown = function(arr, hometown) {
  arr.forEach(function(driver) {
  if (driver.hometown == hometown) {
    console.log(driver.name)
  }
})
}
const driversByRevenue = function(arr) {
  return arr.slice().sort(function(d1, d2){
    return d1.revenue-d2.revenue
  })
}

const driversByName = function(arr) {
  return arr.slice().sort(function(d1,d2) {
    return d1.name.localeCompare(d2.name)
  })
}

const totalRevenue = function(arr) {
  return arr.slice().reduce(function (all, driver) {
    return driver.revenue + all
  }, 0)
}

const averageRevenue = function(arr) {
  return totalRevenue(arr) / arr.length 
}
