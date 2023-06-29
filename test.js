const { sum } = require('./app.js');


//primera suma
test('adds 3 + 7 to equal 10', () => {
    let total = sum(3, 7);

    expect(total).toBe(10);
});


 //segunda suma
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

//copy n paste

//from Euro to Dollar

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

//From Dollar to Yen
test("One dollar should be 144.37 yen", function(){
    //import the function from app.js
    const { fromDollartoYen } = require('./app.js')

    // use the function like its suppoed to be used
    const Yen = fromDollartoYen(3.5)

    // if 1 dollar is 144.37 yen, then 3.5 dollars should be (3.5 * 144.37)
    const expected = 3.5 * 144.3; 
    
    // this is the comparison for the unit test
     expect(fromDollartoYen(3.5)).toBe(505.295); //1 dollar is 144.37 yen, then 3.5 dollars should be = (3.5 * 144.37)
})

//From Yen to Pound
test("One Yen should be 144.37 Pound", function(){
    //import the function from app.js
    const { fromYentoPound } = require('./app.js')

    // use the function like its suppoed to be used
    const Pound = fromYentoPound(1000)

    // if 1 Yen is 0.005 Pound, then 1000 Yen should be (1000 * 0.005)
    const expected = 1000 * 0.005; 
    
    // this is the comparison for the unit test
     expect(fromYentoPound(1000)).toBe(5); //1 Yen is 0.005 Pounds, then 1000 Yen should be = (1000 * 0.005)
})
