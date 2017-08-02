const Joi = require('Joi');

mod = module.exports = {};

mod.inputName = function(){
	return Joi.string().min(1).max(255);
}

mod.email = function(){
	return Joi.email();
}

/**
 * min:2, max:30
 */
mod.username = function(){
	return Joi.string().alphanum().min(2).max(30);
}

/**
 * min:6
 */
mod.password = function(){
	return Joi.string().alphanum().min(6);
}
