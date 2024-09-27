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
        for (let i = 0; i < this.habitaciones.length; i++) {
            let habitacion = this.habitaciones[i]; 
    
            if (habitacion.numero === numero) {
                if (!habitacion.disponible) {
                    return console.log(`La habitación ${numero} no está disponible.`);
                }
    
                habitacion.alquilar();
                console.log(`Habitación ${numero} alquilada.`);
                return; 
            }
        }
    
        console.log(`Habitación ${numero} no encontrada.`);
    }
    
    
       
    liberarHabitacion(numero) {
    
        for (let i = 0; i < this.habitaciones.length; i++) {
          let  habitacion = this.habitaciones[i];
          if(habitacion.numero === numero) {
            if (!habitacion.disponible){
                return console.log(`La habitación ${numero} no está alquilada.`);
            }
            
            habitacion.liberar();
            console.log(`Habitación ${numero} liberada.`);
            
        }
        
    
    }
        
   
    }

    mostrarHabitacionesDisponibles() {
        console.log("Habitaciones disponibles:");
        
        for (let i = 0; i < this.habitaciones.length; i++) {
            if (this.habitaciones[i].disponible) {   
                console.log(`Habitación ${this.habitaciones[i].numero}, Tipo: ${this.habitaciones[i].tipo}`);
            }
        }
    }
}

module.exports = Hotel;
