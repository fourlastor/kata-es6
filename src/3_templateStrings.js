/*
 Template strings are delimited by back ticks -> `
 They support newlines, and string interpolation.
 You can use ${nameOfTheVariable} to interpolate a variable, or any expression (e.g. function call).
 */

const multipleLines = 'Strings cannot be split\n' +
    'in multiple lines!'

const number = 42
const interpolate = 'Such effort to interpolate the ' + generateAnswer(number) + '!'

function generateAnswer (number) {
    return 'answer so that it will be ' + number
}

module.exports = {
    multipleLines,
    interpolate
}
