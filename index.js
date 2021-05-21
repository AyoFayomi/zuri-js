// FIRST TASK

function convertFahrToCelsius (parameter) {
    Fahr = parseFloat(parameter)
    if (typeof parameter == 'number' || typeof parameter == 'string') {
        const calc1 = 5 / 9;
        const calc2 = Fahr - 32 ;
        const calcFahr = ((calc2 * calc1).toFixed(4));
        return calcFahr;
    } else {
        return `${parameter} is not a valid number but a/an ${typeof parameter}`;
    }
}

console.log(convertFahrToCelsius(0));


//SECOND TASK

function checkYuGiOh (n) {
    const checkYuGiOhArray = [];
    if (n > 0) {
        for (i = 1; i <= n; i++ ) {
            if ( (i % 2 == 0) && (i % 3 == 0) && (i % 5 == 0)) {
            checkYuGiOhArray.push('yu-gi-oh');
        } else if ( (i % 2 == 0) && (i % 3 == 0)) {
            checkYuGiOhArray.push('yu-gi');
        } else if ( (i % 2 == 0) && (i % 5 == 0)) {
            checkYuGiOhArray.push('yu-oh');
        } else if ( i % 2 == 0) {
            checkYuGiOhArray.push('yu');
        } else if ( i % 3 == 0) {
            checkYuGiOhArray.push('gi');
        } else if ( i % 5 == 0) {
            checkYuGiOhArray.push('oh');
        } else {
            checkYuGiOhArray.push(i) 
        }
    }
} else if (typeof n !== 'number') {
    return `invalid parameter: ${n}`}
    return checkYuGiOhArray;}

console.log (checkYuGiOh("5"));