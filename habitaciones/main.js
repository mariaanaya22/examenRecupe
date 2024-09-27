
const Hotel = require('./models/Hotel');

const hotel = new Hotel();

// Agregar habitaciones
hotel.agregarHabitacion(101, 'simple');
hotel.agregarHabitacion(102, 'doble');
hotel.agregarHabitacion(201, 'Queen');


hotel.mostrarHabitacionesDisponibles();


hotel.alquilarHabitacion(101);
hotel.alquilarHabitacion(102);

hotel.mostrarHabitacionesDisponibles();
hotel.liberarHabitacion(101);
hotel.mostrarHabitacionesDisponibles();
