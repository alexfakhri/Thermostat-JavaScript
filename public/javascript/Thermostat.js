function Thermostat() {
	this.temperature = 20;
	this.minimumTemperature = 10;
	this.maximumTemperature = 32;
	this.isPowerSaverOn = true;
	this.saverMaxTemp = 25;
};

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if(this.temperature + degrees <+ this.saverMaxTemp) {
		return this.temperature += degrees; }
		else { return 'Cannot set above ' + this.maximumTemperature + ' degrees.'};
	
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees;
	if(this.temperature < this.minimumTemperature) return this.minimumTemperature;
	return this.temperature;
};

Thermostat.prototype.resetToDefaultTemperature = function() {
	return this.temperature = 20
};

Thermostat.prototype.powerSaverButtonOff = function() {
	return this.isPowerSaverOn = false;
};

Thermostat.prototype.powerSaverButtonOn = function() {
	return this.powerSaverButtonOn = true
};



// this.temperature += degrees;
// 	if(this.temperature > this.saverMaxTemp && this.isPowerSaverOn === true) return this.saverMaxTemp;
// 	if(this.temperature > this.maximumTemperature && this.isPowerSaverOn === false) return this.maximumTemperature;
// 	return this.temperature;