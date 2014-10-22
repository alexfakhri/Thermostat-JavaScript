function Thermostat() {
	this.temperature = 20;
	this.minimumTemperature = 10;
	this.isPowerSaverOn = true;
};

Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
	if(this.temperature > 25 && this.isPowerSaverOn === true) return new Error("Power saving mode is ON. Cannot exceed 25 degrees");
	if(this.temperature > 32 && this.isPowerSaverOn === false) return new Error("Cannot exceed 32 degrees");
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	this.temperature -= degrees;
	if(this.temperature < 10) return new Error("Cannot exceed minimum temperature of 10");
};


Thermostat.prototype.powerSaverButton = function(onOff) {
	if (onOff === "off") return this.isPowerSaverOn = false;
	if (onOff === "on") return this.isPowerSaverOn;
};

Thermostat.prototype.resetToDefaultTemperature = function() {
	return this.temperature = 20
};