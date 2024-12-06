# Performance

## Float32

This project introduces a (old)new data type for JavaScript: single floats. Despite being less accurate than the classic doubles for number semantics, they are important for performance on the PS2, as the console only processes 32-bit floats on its FPU.

You can write single floats on AthenaEnv following the syntax below:

```js
let test_float = 15.0f; // The 'f' suffix makes QuickJS recognizes it as a single float.
``` 
or  
```js
let test_float = Math.fround(15.0); // Math.fround returns real single floats on Athena.
``` 