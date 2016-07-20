# param-check
A js library for checking parameters and any object.

## Using

### Global

```
<html>
<script src="param-check.js"></script>
<script>
	var foobar = 2;
	check(foobar).gt(1).lt(3);
</script>
</html>
```

### CommonJS

```
var check = require('./param-check');

var foobar = 2;
check(foobar).gt(1).lt(3);
```


