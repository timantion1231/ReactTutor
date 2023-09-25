let a = Math.floor(Math.random() * 100);

function if_statement(a) {
    state1 = 0
    state2 = 0
    state3 = 0

    if (a > 10) {
       a
    }
    else {
        a = a * 2
    }

    if(a>5){
        a = (2*a)+1
    }
    else{
        if(a<3){
            a = 1
        }
        else{
            a = 2*(a-2)
        }
    }

    if(a>4){
        a = 5
    }
    else{
        if(a%2==0){
            a = 6
        }
        else{
            a = 7
        }
    }

    return a
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

//console.log((a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7));
