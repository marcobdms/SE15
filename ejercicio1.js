// Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no (un
//     año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible
//     entre 400).

let añoBisiesto = parseInt(prompt('introduce un año'));

if ((añoBisiesto % 4 === 0 && añoBisiesto % 100 !== 0) || añoBisiesto % 400 === 0) {
    alert(añoBisiesto + " es un año bisiesto.")
} else {
    alert(añoBisiesto + " no es un año bisiesto");
}