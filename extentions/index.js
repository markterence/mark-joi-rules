var Joi = require('Joi');

Joi.startsWithLetter = function(){
	return Joi.regex('^[a-zA-Z]');
};

module.exports = Joi;