const js = import("./node_modules/@hexaforce/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});