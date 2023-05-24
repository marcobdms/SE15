//Kata I - notas

let nota = prompt('introduce tu nota');


switch (nota) {
    case '1':
    case '2':
    case '3':
    case '4':
        console.log('has suspendido');
        break;
    case '5':
    case '6':
        console.log('has aprobado');
        break;
    case '7':
    case '8':
        console.log('Notable');
        break;
    case '10':
        console.log('sobresaliente')
        break;
    default:
        console.log('Introduce una nota valida')
}
