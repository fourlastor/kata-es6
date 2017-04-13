describe('Kata', () => {

    describe('An arrow function', () => {
        const {fn, world} = require('../src/2_arrowFunctions')

        it('Will return world when passing an unexpected context', () => {
            expect(fn.apply(undefined)).toBe(world)
        })
    })

    describe('Classes', () => {
        const {Parent, Child} = require('../src/1_classes')

        xit('Child should extend Parent', () => {
            const child = new Child(42)

            expect(child instanceof Parent).toBe(true, 'Child doesn\'t extend Parent!')
        })

        it('Child should be able to give back the answer', () => {
            const child = new Child(42)

            expect(child.answer()).toBe(42)
        })

        it('Child should be able to question us', () => {
            const child = new Child(42)

            expect(child.question()).toBe('Blue pill? Red pill? Green pill?')
        })
    })

    describe('String interpolation', () => {
        const {interpolate, multipleLines} = require('../src/3_templateStrings')

        it('should support newlines', () => {
            expect(multipleLines).toBe('Strings cannot be split\nin multiple lines!')
        })

        it('should support newlines', () => {
            expect(interpolate).toBe('Such effort to interpolate the answer so that it will be 42!')
        })
    })

    describe('destructuring', () => {
        const {seriesOfThings, first, second, mapOfThings, a, b} = require('../src/4_destructuring')

        it('should destructure arrays', () => {
            expect(first).toBe(seriesOfThings[0])
            expect(second).toBe(seriesOfThings[1])
        })

        it('should destructure objects', () => {
            expect(a).toBe(mapOfThings.a)
            expect(b).toBe(mapOfThings.b)
        })
    })

    describe('more functions', () => {
        const {doubleOrZero, optionsOrNull, firstThreeElementsOrZero} = require('../src/5_moreFunctions')

        describe('doubleOrZero', () => {
            it('should double input parameters', () => {
                expect(doubleOrZero(1)).toBe(2)
                expect(doubleOrZero(2)).toBe(4)
            })

            it('should default to 0', () => {
                expect(doubleOrZero()).toBe(0)
            })
        })

        describe('optionsOrNull', () => {
            it('should pass through only valid options', () => {
                const result = optionsOrNull({a: 'something', b: false, invalid: 'invalid'})
                expect(result).toEqual({a: 'something', b: false})
            })

            it('should default options to null', () => {
                const result = optionsOrNull({})
                expect(result).toEqual({a: null, b: null})
            })
        })

        describe('firstThreeElementsOrZero', () => {
            it('should get the first three element of the array', () => {
                const result = firstThreeElementsOrZero([1, 2, 3])
                expect(result).toEqual([1, 2, 3])
            })

            it('should get remove extra elements from the array', () => {
                const result = firstThreeElementsOrZero([1, 2, 3, 4, 5])
                expect(result).toEqual([1, 2, 3])
            })

            it('should fill up the remaining elements with zeroes', () => {
                const result = firstThreeElementsOrZero([1])
                expect(result).toEqual([1, 0, 0])
            })
        })

    })

    describe('generator functions', () => {
        const {threeNumbers, infiniteNumbers, accumulateValues} = require('../src/6_generatorFunction')

        xit('should yield 1, 2 and 3 and terminate', () => {
            const iterator = threeNumbers()
            expect(iterator.next()).toEqual({value: 1, done: false})
            expect(iterator.next()).toEqual({value: 2, done: false})
            expect(iterator.next()).toEqual({value: 3, done: false})
            expect(iterator.next()).toEqual({value: undefined, done: true})
        })

        xit('should yield infinite numbers, starting with 0', () => {
            const iterator = infiniteNumbers()

            for (let i = 0; i < 100; i++) {
                expect(iterator.next()).toEqual({value: i, done: false})
            }
        })

        xit('should accumulate values every iteraction, starting with the first given', () => {
            const iterator = accumulateValues()

            let previous = 0
            for (let i = 0; i < 100; i++) {
                const result = iterator.next(i)
                expect(result).toEqual({value: i + previous, done: false})
                previous = result.value
            }
        })
    })
})
