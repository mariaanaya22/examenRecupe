
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
        const habitacion = this.habitaciones.find(h => h.numero === numero);
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
        const habitacion = this.habitaciones.find(h => h.numero === numero);
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
        this.habitaciones.forEach(h => {
            if (h.disponible) {
                // Imprime especifica la   habitación
                console.log(`Habitación ${h.numero}, Tipo: ${h.tipo}`);
            }
        });
    }
}

module.exports = Hotel;
