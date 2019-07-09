const {add, subtract, multiply, divide} = require('./calculator.helper')

test('adds 1 + 2 to equal 3', ()=>{
    expect(add(1,2)).toBe(3)
})
test('subtract 5 from 9 to equal 4', ()=>{
    expect(subtract(9,5)).toBe(4)
})
test('multiply 2 by 2 to equal 4', ()=>{
    expect(multiply(2,2)).toBe(4)
})
test('divide 12 by 3 to equal 4', ()=>{
    expect(divide(12,3)).toBe(4)
})
test('7 divided by 3', ()=>{
    expect(divide(7,3)).not.toBe(5)
})