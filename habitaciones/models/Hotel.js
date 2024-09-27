const Habitacion = require('./Habitacion');

class Hotel {
    constructor() {
        this.habitaciones = [];
    }

    agregarHabitacion(numero, tipo) {
        const nuevaHabitacion = new Habitacion(numero, tipo);
        this.habitaciones.push(nuevaHabitacion);
    }

    alquilarHabitacion(numero) {
        let habitacion;
    
        for (let i = 0; i < this.habitaciones.length; i++) {
            if (this.habitaciones[i].numero === numero) {
                habitacion = this.habitaciones[i];
                break;
            }
        }
    
        if (!habitacion) {
            return console.log(`Habitación ${numero} no encontrada.`);
        }
        if (!habitacion.disponible) {
            return console.log(`La habitación ${numero} no está disponible.`);
        }
        
        habitacion.alquilar();
        console.log(`Habitación ${numero} alquilada.`);
    }

    liberarHabitacion(numero) {
        let habitacion;
        for (let i = 0; i < this.habitaciones.length; i++) {
            if (this.habitaciones[i].numero === numero) {
                habitacion = this.habitaciones[i];
                break;
            }
        }
    
        if (!habitacion) {
            return console.log(`Habitación ${numero} no encontrada.`);
        }
        if (habitacion.disponible) {
            return console.log(`La habitación ${numero} ya está disponible.`);
        }
        
        habitacion.liberar();
        console.log(`Habitación ${numero} liberada.`);
    }

    mostrarHabitacionesDisponibles() {
        console.log("Habitaciones disponibles:");
        
        for (let i = 0; i < this.habitaciones.length; i++) {
            if (this.habitaciones[i].disponible) {
                // Imprime información de la habitación
                console.log(`Habitación ${this.habitaciones[i].numero}, Tipo: ${this.habitaciones[i].tipo}`);
            }
        }
    }
}

module.exports = Hotel;
