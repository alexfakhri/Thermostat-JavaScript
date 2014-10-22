"use strict";

describe('Thermostat', function() {
	var thermostat;

	describe('by default', function() {

		it('is set to 20 degrees', function() {
			thermostat = new Thermostat();
			expect(thermostat.temperature).toEqual(20);
		});

		it('has a minimum temperature of 10 degrees', function() {
			expect(thermostat.minimumTemperature).toEqual(10);
		});

		it('power saving mode will be on', function() {
			expect(thermostat.isPowerSaverOn).toBe(true);
		});
	});





});