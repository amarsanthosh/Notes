## Doc strings(documented string)
to avail the function decription for the user when hover on the fn name

/** (put enter in vs code before the function)

    function add(a,b){ //we need to keep the brackets in sides not below
    
        return a+b;
    
    }

 in js no datatype is specified

### in js 
1. first class function -> when we treat a function as a normal variable  //function expression
2. Higher order funciton -> passing function as a argument and receiving function from another function

### Three types of function
1.normal function

2.function expression    

3.arrow function 


2:

    const sub = function(a,b){
    
        return a-b;
        
    }

3: //without using function keyword , we use arrows

    const div = (a,b) => {
    
      return a/b;
      
    }

### uses of arrow function

// reducing the lines of code

const square = (x) => x*x;

const add = (a,b) => a+b;

### Higher order function

const add = (a,b) => a+b;

const sub = (a,b) => a-b;

const mul = (a,b) => a*b;

const div = (a,b) => a/b;

    function perform(a,b,fn) {
    
        let result = fn(a+b);
        console.log(result);
    }

perform(10,20,sub);
    
// This increses the readability of the code and here we are using function as a variable


RETURNING A FUNCTION

    function sample(x) {
        if(x%2 == 0)
            return (a) => a*10;
        else
            return (a) => a*100;
    }

    var fn = sample(20);
    console.log(fn(20)); // 200

    var fn = sample(15);
    console.log(fn(15)); // 1500
            


### For JS we can run it in dev tool -> console

## in JS function itself is a object , we can use it with (.)
    add.name //returns the name of the function (op -> add)

ex:

    function fn1() {
        console.log("calling fn1");
    } 

    const fn2 = fn1;
    const fb3 = fn1;
    fn1();
    fn2();
    fn3();


### callback function -> {execute later} // just an concept
    setTimeOut( () => {
        console.log("HOOO");
    },2000);

here, the console.log is like the callback function [1st arg for settimeout] , 2000 is the [second arg]

To clear/stop the timeout

    var id = setTimeOut( () => {
        console.log("HOOO");
    },10000);

    clearrTimeout(id);

    
### setintrval-> to keep the process repeatedly executing , settimeout -> only once execute

## Call back hell
    setTimeOut( () => {
        console.log("exec: 1");
        setTimeOut( () => {
            console.log("exec: 2");
            setTimeOut( () => {
                console.log("exec: 3");
            },1000);
        },1000);
    },1000);
    

