let a = Math.floor(Math.random() * 100);

function if_statement(a) {
temp = 0
    if (a > 10) {
        temp = a
    }
    else {
        temp = a*2
    }

    if(temp>5){
        temp = (2*a)+1
    }
    else{
        if(a<3){
            
        }
        else{

        }
    }
}

(a > 10 
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



function if_statement2(a) {
    return (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7)
}
console.log(a)
console.log(if_statement2(a))//true
console.log(if_statement(a))//check

//console.log((a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7));
