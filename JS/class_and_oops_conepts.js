Four pillars of OOPS :
  Encapsulation -> binding of methods and data together into single entity
  Polymorphism -> Abilityof an object to respond diffrently for diff behaviours
  Inheritance -> extends,super(keywords)
  Abstraction

class => blueprint   , class keyword is introduced in 2012
object => instance of a class
attributes 
    class attributes
    instance attributes
    public private protected

methods -> static

___________________________________________________________________

simple class in js : 
------------------

class Sample{
  constructor(a,b){
    this.a = a;
    this.b = b;
  }
  display(){
    return `value a is {$this.a} and b is {$this.b}`;
  }
  static callMe(){
    return "A static method";
  }
}
let obj1 = new Sample();
let obj2 = new Sample();
Sample.callMe();


  * when a method need to accessed without obj, then go for static method.
  class Sample{
    static callMe(){
      return "A static method";
    }
  }
  
  * TO make a function or variable Private in a class, put '#' infront of it or at the starting
    ex : 
      class Simple{
        #value = 10; //this is private instance variable
        #display(){
          return 'the value is ' + this.#value;
        }
      }





