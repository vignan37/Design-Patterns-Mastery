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

/*
Resources :

https://www.patterns.dev/vanilla/singleton-pattern
https://www.freecodecamp.org/news/the-basic-design-patterns-all-developers-need-to-know/
https://refactoring.guru/design-patterns/singleton
*/

/*
Quizes:

https://www.gofpattern.com/design-patterns/module3/singleton-pattern-quiz.php

Each question is worth one point. Select the best answer or answers for each question.
 	
1.	The general purpose of the Singleton pattern is to:
Please select the best answer.
 	A.	Ensure that no more than one instance of a class exists.
 	B.	Ensure that only one instance of a class exists at the same time.
 	C.	Separate objects in a single class from objects in another class.
 	D.	Control creation of objects in a single class or another class.

2.	The participants in a design pattern are:
Please select the best answer.
 	A.	The methods used in the pattern
 	B.	The other patterns that participate with the pattern
 	C.	The classes and objects used in the pattern
 	D.	The fields used in the pattern

3.	The consequences of a design pattern are:
Please select the best answer.
 	A.	The pitfalls of using the particular pattern
 	B.	The results of choosing a pattern
 	C.	The time a program using the pattern takes to run
 	D.	The time it takes to design a program using the pattern

4.	Which of the following is specifically in the realm of applicability of the Singleton?
Please select the best answer.
 	A.	The class has only a single member method.
 	B.	The class has only a single field.
 	C.	The class should have exactly one instance.
 	D.	The class cannot be subclassed.

Correct answers:
1. A : The correct answer is A. The Singleton pattern ensures that no more than one instance of the class exists ever.
It does not allow one instance of the Singleton to be destroyed and then another one created. 
In general, a Singleton has nothing to do with separating objects in different classes. 
A Singleton does control creation of objects, but not in a single or another class.

2. C : A class pattern has mostly class participants. An object pattern has mostly object participants. 
However, many patterns have both. Fields and methods only enter into patterns as parts of the classes and objects they belong to.

3. B : Although the English word consequences has a somewhat negative connotation, 
in the context of design patterns it includes all major results choosing or using a pattern, both positive and negative. 
Of course for good patterns that fit the problem they're being used to solve, the positive consequences should outweigh the negative ones.

4. C : Although many of the examples in this module used classes with only a single static field, 
in more specific cases the class can have many different static and instance fields and methods and still be a Singleton. 
The single in Singleton refers to the number of instances of the class, not the number of fields or methods in the class. 
D is incorrect because Singleton classes can be subclassed.

*/