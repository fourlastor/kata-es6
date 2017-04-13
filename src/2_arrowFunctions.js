/*
 Arrow functions let you auto bind the current context, so that the value of this will be the one defined while
 writing the function

 An arrow function doesn't require .bind!

 const fn = () => {
   return this.something
 }

 You can also directly return an expression, that's called shorthand syntax:

 const fn = () => this.something + 1

 When returning an object,make sure to wrap it in round brackets, as curly ones are used to declare the body

 const createAnObject = () => ({answer: 42})

 If you have one parameter, braces aren't required:

 const answerMe = question => ({asked: question, answer: 42})
 */

const obj = {
    world: 'world',
    hello: function () {
        return this.world
    }
}

module.exports = {
    fn: obj.hello.bind(obj),
    world: obj.world
}
