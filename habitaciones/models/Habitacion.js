
class Habitacion {
    constructor(numero, tipo) {
        this.numero = numero; 
        this.tipo = tipo; 
        this.disponible = true; 
    }

    alquilar() {
        this.disponible = false; 
    }

    liberar() {
        this.disponible = true; 
    }
}

module.exports = Habitacion;
