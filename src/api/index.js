import { Router } from 'express';
import request from 'request-promise';
import { version } from '../../package.json';
import { soundbarURL } from '../config.json';


export default ({ config, db }) => {
	let api = Router();

	api.get('/system-information', (req, res) => {

		// Get soundbar's system information
		var options = {
	    method: 'POST',
	    uri: `${soundbarURL}/sony/system`,
	    body: {
				method: 'getSystemInformation',
				id: 65,
				params: [],
				version: '1.4'
	    },
	    json: true
		};

		request(options)
	    .then((parsedBody) => {
	    	res.json({ parsedBody });
	    })
	    .catch((err) => {
	    	res.status(500).json({ err });
	    });
	});

	api.get('/power-status', (req, res) => {

		// Get soundbar's power status
		var options = {
			method: 'POST',
			uri: `${soundbarURL}/sony/system`,
			body: {
				method: 'getPowerStatus',
				id: 50,
				params: [],
				version: '1.1'
			},
			json: true
		};

		request(options)
			.then((parsedBody) => {
				res.json({ parsedBody });
			})
			.catch((err) => {
				res.status(500).json({ err });
			});
	});

	api.get('/power-on', (req, res) => {

		// Turn on the soundbar
		var options = {
			method: 'POST',
			uri: `${soundbarURL}/sony/system`,
			body: {
				method: 'setPowerStatus',
				id: 55,
				params: [
					{
						status: "active"
					}
				],
				version: '1.1'
			},
			json: true
		};

		request(options)
			.then((parsedBody) => {
				res.json({ parsedBody });
			})
			.catch((err) => {
				res.status(500).json({ err });
			});
	});

	api.get('/power-off', (req, res) => {

		// Turn off the soundbar
		var options = {
			method: 'POST',
			uri: `${soundbarURL}/sony/system`,
			body: {
				method: 'setPowerStatus',
				id: 55,
				params: [
					{
						status: "off"
					}
				],
				version: '1.1'
			},
			json: true
		};

		request(options)
			.then((parsedBody) => {
				res.json({ parsedBody });
			})
			.catch((err) => {
				res.status(500).json({ err });
			});
	});

	api.get('/switch-to-analog', (req, res) => {

		// Turn off the soundbar
		var options = {
			method: 'POST',
			uri: `${soundbarURL}/sony/avContent`,
			body: {
				method: 'setActiveTerminal',
				id: 13,
				params: [
					{
						active: 'active',
						uri: 'extInput:line'
					}
				],
				version: '1.0'
			},
			json: true
		};

		request(options)
			.then((parsedBody) => {
				res.json({ parsedBody });
			})
			.catch((err) => {
				res.status(500).json({ err });
			});
	});

	api.get('/switch-to-appletv', (req, res) => {

		// Turn off the soundbar
		var options = {
			method: 'POST',
			uri: `${soundbarURL}/sony/avContent`,
			body: {
				method: 'setActiveTerminal',
				id: 13,
				params: [
					{
						active: 'active',
						uri: 'extInput:hdmi'
					}
				],
				version: '1.0'
			},
			json: true
		};

		request(options)
			.then((parsedBody) => {
				res.json({ parsedBody });
			})
			.catch((err) => {
				res.status(500).json({ err });
			});
	});

	api.get('/switch-to-xbox', (req, res) => {

		// Turn off the soundbar
		var options = {
			method: 'POST',
			uri: `${soundbarURL}/sony/avContent`,
			body: {
				method: 'setActiveTerminal',
				id: 13,
				params: [
					{
						active: 'active',
						uri: 'extInput:hdmi?port=1'
					}
				],
				version: '1.0'
			},
			json: true
		};

		request(options)
			.then((parsedBody) => {
				res.json({ parsedBody });
			})
			.catch((err) => {
				res.status(500).json({ err });
			});
	});

	return api;
}
