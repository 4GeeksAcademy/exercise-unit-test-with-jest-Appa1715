const sum = (a,b) => {
    return a + b
};

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollartoYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 144.37;
    //return the Yen value
    return valueInYen;
}

const fromYentoPound = function(valueInYen){
    // convert the given valueInYen to pounds
    let valueInPound = valueInYen * 0.005;
    //return the Yen value
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollartoYen, fromYentoPound};



