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
		return this;
	}

	getCounterS(){
		return this.counterS;
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

console.log(SingletonCounter.getInstanceS());
// Error: You can only create one instance!
