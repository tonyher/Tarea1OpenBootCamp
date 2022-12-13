
//Tarea 1 boot camp OpenBootCamp



var Suma =(num, num1, num2) =>{
    alert(num + num1 + num2)
}

Suma(1,2,3);


class Coche{
    constructor(){
        this.puertas = 4;
    }

    get Mostrar(){
        this.puertas = this.puertas + 1;
        alert(`El vehiculo cuenta con: ${this.puertas}`)
    }
}

const miCoche = new Coche();

console.log(miCoche.Mostrar());