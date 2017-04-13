/*
 Destructuring declarations
 You can access quickly known value in an array/object via destructuring declaration:

 To access the first N elements in an array, you can do:
 const [one, two, three] = anArray // use one, two, three as vars
 notice that one, two and three are arbitrary names.

 To access some values in an object, you can do:
 const {a, b, c} = anObject // use a, b, c as vars
 notice that a, b, c are keys defined in an object, you don't need to get all the keys, only the one you're interested inx

 If you want to rename some keys in the second example, you can do:

 const {a: aValue} = anObject // use aValue as a var
 where a is the key, aValue is the name you want to do
 */

const seriesOfThings = [1, 'b']

const first = seriesOfThings[0]
const second = seriesOfThings[1]

const mapOfThings = {a: 1, b: 2}
const a = mapOfThings.a
const b = mapOfThings.b

module.exports = {
    seriesOfThings,
    first,
    second,
    mapOfThings,
    a,
    b
}
