var thermostat = new Thermostat

$(document).ready(function() {
	$('.thermostat h2').text(thermostat.temperature);
});

$('.increase_temperature').on('click', function() { 
	$('.thermostat h2').text(thermostat.increaseTemperature());
});






