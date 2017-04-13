/*
 Classes in JS are actually functions, whose prototype contains all the methods and fields.
 Extending a class correctly is _extremely_ complicated, you can check the effort required at
 https://babeljs.io/repl/ creating 2 classes, one that extends the other.
 Try to add new methods, properties, and see how the code grows.

 Classes in ES6 support super, extends and constructors.
 A class is declared like this:  class A { // body of the class }
 To extend: class B extends A: { // body of the class }
 To create a constructor: class B { constructor(secretKey) { this.secretKey = secretKey } }
 To declare a method: class B { method() { // body of the method } }
 To call super: super() in the constructor, super.methodName() in a method.
 */

function Parent(theAnswer) {
    this.theAnswer = theAnswer
}

Parent.prototype.answer = function () {
    return this.theAnswer
}

Parent.prototype.question = function () {
    return 'Blue pill? Red pill?'
}

// Child doesn't extend Parent, but you can do it with classes!
function Child(theAnswer) {
    this.theAnswer = theAnswer
}

Child.prototype.answer = function () {
    return this.theAnswer
}

Child.prototype.question = function () {
    return 'Blue pill? Red pill? Green pill?'
}

module.exports = {
    Parent, Child
}
