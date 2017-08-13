module.exports = function (obv, delay) {
  delay = delay || 1000
  function _obv (fn) {
    var ts = 0, timer
    obv(function (v) {
      if(Date.now() > ts + delay) {
        ts = Date.now()
        fn(v)
      }
      else {
        if(timer) return
        clearTimeout(timer)
        timer = setTimeout(function () {
          timer = null
          ts = Date.now()
          fn(obv.value)
        }, delay)
      }
    })
  }
  _obv.set = obv.set
  return _obv
}






