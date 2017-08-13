# obv-debounce

take an observable that triggers too much,
and make it trigger less, often, but always eventually trigger!

``` js
var Debounce = require('obv-debounce')
var lessBusyObv = Debounce(busyObv)
```

## License

MIT
