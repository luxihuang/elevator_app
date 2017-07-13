var EventEmitter = require('events');
var elevator = new EventEmitter();
var currentFloor = 1;

var passengers = [
    { name: 'Jerry', destination: 4 },
    { name: 'Kramer', destination: 10 }, 
    { name: 'Newman', destination: 2 }
]

var currentPassenger = passengers[0];

//Add an event listener for up that increments the current floor. The up listener should also receive a passenger argument.
elevator.on('upFloor', function(passenger){
    console.log('you have pressed up floor');
    console.log(currentPassenger.name + 'has entered');
});

elevator.emit('upFloor', passengers); //2 arguments, first is the data to pass through

//If the current floor is less than the passenger's destination, wait one second and emit the up event again.

if(currentFloor < currentPassenger.destination){
    setTimeout(function(){
        elevator.emit('upFloor', passengers);
    }, 1000);
};

