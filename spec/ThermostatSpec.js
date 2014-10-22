"use strict";

describe('Thermostat', function() {
	var thermostat;

		beforeEach(function(){
			thermostat = new Thermostat();
		});

	describe('by default', function() {


		it('is set to 20 degrees', function() {
			expect(thermostat.temperature).toEqual(20);
		});

		it('has a minimum temperature of 10 degrees', function() {
			expect(thermostat.minimumTemperature).toEqual(10);
		});

		it('power saving mode will be on', function() {
			expect(thermostat.isPowerSaverOn).toBe(true);
		});
	});


	describe('Custom option', function() {

		it('can increase the temperature by on degree', function() {
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21)
		});

		it('can decrease the temperature by on degree', function() {
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(19)
		});

		it('can increase the temperature by 10 degrees', function(){
			thermostat.increaseTemperatureBy(10);
			expect(thermostat.temperature).toEqual(30);
		});

		it('can decrease the temperature by 10 degrees', function(){
			thermostat.decreaseTemperatureBy(10);
			expect(thermostat.temperature).toEqual(10);
		});

		it('power saving mode can be turned off', function(){
			thermostat.powerSaverButton("off");
			expect(thermostat.isPowerSaverOn).toBe(false);
		});

		it('power saver mode can be switched back on', function() {
			thermostat.powerSaverButton("on");
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('should be able to reset to the default temperature', function(){
			thermostat.increaseTemperatureBy(10);
			thermostat.resetToDefaultTemperature();
			expect(thermostat.temperature).toEqual(20);
		});


	});


});