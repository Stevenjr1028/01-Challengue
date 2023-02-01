const newRegularFunction= function (a) {
    if (a % 2==0){
        return "El numero " + a + " es par"
    }else {
        return "El numero " + a + " es impar"
    }
}

const arrowFunction = (a) => {
    if (a % 2==0){
        return "El numero " + a + " es par"
    }else {
        return "El numero " + a + " es impar"
    }
}

console.log(newRegularFunction(4))
console.log(arrowFunction(9))