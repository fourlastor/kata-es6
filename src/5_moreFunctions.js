/* More on functions */

/*
 Default value for parameters
 You can set a default value for parameters, if you wish
 just assign the parameter default value to the parameter in the function declaration
 */
const doubleOrZero = (number) => {
    if (number === undefined) {
        return 0
    }

    return number * 2
}

/*
 Destructuring parameters
 You can use the destructuring declaration also in parameters, that's especially useful when passing options
 You can also assign default value to single keys that way!
 */
const optionsOrNull = (options) => {
    const a = options.a === undefined ? null : options.a
    const b = options.b === undefined ? null : options.b

    return {a, b}
}

/*
 Same goes with destructuring arrays ;P
 */
const firstThreeElementsOrZero = (elements) => {
    const first = elements[0] === undefined ? 0 : elements[0]
    const second = elements[1] === undefined ? 0 : elements[1]
    const third = elements[2] === undefined ? 0 : elements[2]
    return [first, second, third]
}

module.exports = {
    doubleOrZero,
    optionsOrNull,
    firstThreeElementsOrZero
}
