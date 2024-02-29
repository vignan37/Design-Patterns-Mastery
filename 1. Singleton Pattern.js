/* Its a Creational pattern.

When do we use : 

When we need only a single instance of the class. 


How to implement it:

1. Make a private static variable, holding the only instance of the class.
2. Make a private constructor, so it cannot be instantiated anywhere else.
3. Make a public static method, to return the single instance of the class.

Example:

public class EagerSingleton {
	// create an instance of the class.
	private static EagerSingleton instance = new EagerSingleton();

	// private constructor, so it cannot be instantiated outside this class.
	private EagerSingleton() {  }

	// get the only instance of the object created.
	public static EagerSingleton getInstance() {
		return instance;
	}
}

Variations :

*/

// A basic counter

/*
let counterValue =0;

class Counter{
	
	getInstance(){
		return this;
	}

	getCount(){
		return counterValue;
	}
	
	increment(){
		++counterValue;
	}
	decrement(){
		--counterValue;
	}
}

console.log(counterValue);
const a = new Counter();
a.increment();
a.increment();
console.log(a.getCount); // this will return method reference method name
console.log(a.getInstance()); // logs reference to the instance a
console.log(a.getCount()); // this will return the value by the method
const b = new Counter();

console.log(a.getInstance() === b.getInstance()); // false because different instances
*/


// A singleton Counter

let counterS = 0;
let instance;

class SingletonCounter{

	constructor(){
		if(instance){
			console.log("You can only create one instance!");
			//throw new Error("Only 1 instance can be created");
		}
		else{
			instance = this;
		}
	}

	static getInstanceS(){
		return instance;
	}

	getCounterS(){
		return counterS;
	}

	incrementSCounter(){
		++counterS;
	}

	decrementSCounter(){
		--counterS;
	}

}


const counter1 = new SingletonCounter();
const counter2 = new SingletonCounter();

// Error: You can only create one instance!

counter1.incrementSCounter();

const counter3 = SingletonCounter.getInstanceS();
console.log(counter3.getCounterS());




/*
let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}
const inst = new Counter();
inst.increment();
console.log(inst.getCount());
//const singletonCounter = Object.freeze(new Counter());
//export default singletonCounter;

*/


/*

Tradeoffs

Restricting the instantiation to just one instance could potentially save a lot of *memory* space. 
Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance, 
which is referenced throughout the application.

However, Singletons are actually considered an anti-pattern, and can (or.. should) be avoided in JavaScript.

In many programming languages, such as Java or C++, it’s not possible to directly create objects the way we can in JavaScript. In those object-oriented programming languages, we need to create a class, which creates an object. That created object has the value of the instance of the class, just like the value of instance in the JavaScript example.

However, the class implementation shown in the examples above is actually overkill. 
Since we can directly create objects in JavaScript, we can simply use a regular object to achieve the exact same result. 
Let’s cover some of the disadvantages of using Singletons!

Using a regular object
Let’s use the same example as we saw previously. However this time, the counter is simply an object containing:

a count property
an increment method that increments the value of count by one
a decrement method that decrements the value of count by one

*/

//Pure JS implementation to acheive same result


const counterJS = {
	countJS : 0,
	increment(){
		return ++this.countJS;
	},
	decrement() {
    return --this.countJS;
  	}
}

counterJS.increment();
counterJS.increment();
counterJS.decrement();
counterJS.increment();
console.log(counterJS.countJS);
