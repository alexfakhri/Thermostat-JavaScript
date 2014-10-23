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
	this.temperature += degrees;
	if(this.temperature > this.saverMaxTemp && this.isPowerSaverOn === true) return this.saverMaxTemp;
	else if(this.temperature > this.maximumTemperature && this.isPowerSaverOn === false) return this.maximumTemperature;
	else return this.temperature;
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees;
	if(this.temperature < this.minimumTemperature) return this.minimumTemperature;
	else return this.temperature;
};


Thermostat.prototype.powerSaverButton = function(onOff) {
	if (onOff === "off") return this.isPowerSaverOn = false;
	if (onOff === "on") return this.isPowerSaverOn;
};

Thermostat.prototype.resetToDefaultTemperature = function() {
	return this.temperature = 20
};

