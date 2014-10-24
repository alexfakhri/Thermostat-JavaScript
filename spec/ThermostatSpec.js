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

		it('should have a maximum temperature of 32 when power saver is off', function() {
			expect(thermostat.maximumTemperature).toEqual(32)
		});
	
		it('power saving mode will be on', function() {
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('should have a maximum temperature of 25 when power saver is on', function() {
			expect(thermostat.saverMaxTemp).toEqual(25);
		});

	});


	describe('Custom option', function() {

		it('can increase the temperature by one degree', function() {
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21)
		});

		it('can decrease the temperature by one degree', function() {
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(19)
		});

		it('can increase the temperature by 5 degrees', function(){
			thermostat.increaseTemperatureBy(5);
			expect(thermostat.temperature).toEqual(25);
		});

		it('can decrease the temperature by 5 degrees', function(){
			thermostat.decreaseTemperatureBy(5);
			expect(thermostat.temperature).toEqual(15);
		});

		it('power saving mode can be turned off', function(){
			thermostat.powerSaverButtonOff();
			expect(thermostat.isPowerSaverOn).toBe(false);
		});

		it('power saver mode can be switched back on', function() {
			thermostat.powerSaverButtonOn();
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('should be able to reset to the default temperature', function(){
			thermostat.increaseTemperatureBy(5);
			thermostat.resetToDefaultTemperature();
			expect(thermostat.temperature).toEqual(20);
		});

	});

	describe('warnings', function(){

		it('cannot go below minimum temperature', function() {
			expect(thermostat.decreaseTemperatureBy(11)).toEqual(10)
		});

		it('with powersaver on, temp cannot exceed 25 degrees', function() {
			thermostat.powerSaverButtonOn();
			expect(thermostat.increaseTemperatureBy(6)).toEqual('Cannot set above 25 degrees.');
		});

		it('with powersaver off, temp cannot exceed 32 degrees', function() {
			thermostat.powerSaverButtonOff();
			expect(thermostat.increaseTemperatureBy(13)).toEqual('Cannot set above 32 degrees.');
		});	

	});



});