## promises -> alternate for callback hell

const p1 = new Promise((resolve, reject) => {

}); 

### promises has threee states 
- pending
- fullfill
- rejected

```js
let delay = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000);
    },5000);
 });
 //delay is the promise object which have methods (.catch,.then,.finally)
 // this is called chaining [delay.then().catch().finally();]
 delay.then((data) => {
     console.log("promise 1: resolved ", data);
 }).catch((err) => {
     console.log("Promise 1: rejected"); 
 }).finally(() => {
     console.log("finally executed...");
 });    
 
```
