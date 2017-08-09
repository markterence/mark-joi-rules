
var Joi = require('../extentions');
module.exports = {
	generic:{
		string: Joi.string(),
		number: Joi.number(),
	},
	user:{
		username: Joi.string().trim().regex(/^[a-zA-Z][a-zA-Z0-9]*(?=\s|$)$/).min(4).max(32).error(() => {
			return {
				message: 'The username that you have provided is not in the required format.'
			}
		}),
		password: Joi.string().min(8).max(32).error(() => {
			return {
				message: 'Passwords must contain 8 to 32 characters.'
			}
		}),
	},
	poeple:{
		age: Joi.number().positive()
	}
}

