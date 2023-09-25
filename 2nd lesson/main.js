
tern1()
tern2()

function tern1() {
    let a = Math.floor(Math.random() * 100);
    function if_statement(a) {
        state1 = 0
        state2 = 0
        state3 = 0

        if (a > 10) {
            state1 = a
        }
        else {
            state1 = a * 2
        }

        if (state1 > 5) {
            return (2 * a) + 1
        }
        else {
            if (a < 3) {
                state2 = 1
            }
            else {
                state2 = 2 * (a - 2)
            }
        }

        if (state2 > 4) {
            return 5
        }
        else {
            if (a % 2 == 0) {
                return 6
            }
            else {
                return 7
            }
        }
    }

    /*(a > 10 
        ? a 
        : a * 2) > 5 
            ? (2 * a) + 1 
            : (a < 3 
                ? 1 
                : 2 * (a - 2)
                ) > 4 
                    ? 5 
                    :(a % 2 == 0 
                        ? 6 
                        : 7)
    */


    function if_statement2(a) {
        return (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7)
    }
    console.log("a: " + a)
    console.log("Tern original: " + if_statement2(a))//true
    console.log("if statement: " + if_statement(a))//check
}


function tern2() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);

    result = ''

    if (a > 10) {
        result = 'a is bigger than 10'
    }
    else {
        result += 'a is less than or equal to 10 '
    }

    if (a === 5) {
        result += 'an example of a special case'
    }

    if (a === 15) {
        result += 'but a is not 15'
    }

    if (a > 5) {
        result += 'and a is greater than 5'
    }
    else {
        result += 'and a is less than or equal to 5 '
    }

    if (a % 2) {
        result += ' and a is odd'
    }
    else {
        result += ' and a is even '
    }
    console.log('\nmy result: ' + result)
    console.log("deafult result: "+ manyChecks(a))
    console.log("is equal? "+(result===manyChecks(a)))
    /*
a > 10
    ? 'a is bigger than 10'
    : 'a is less than or equal to 10 ' + (a === 5
        ? 'an example of a special case'
        : '') + (a === 15
            ? 'but a is not 15'
            : '') + (a > 5
                ? 'and a is greater than 5'
                : 'and a is less than or equal to 5 ') + (a % 2
                    ? ' and a is odd'
                    : ' and a is even ');
*/

    function manyChecks(a) {
        console.log(`a = ${a}`);
        return (
            a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '') + (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
    }

}





