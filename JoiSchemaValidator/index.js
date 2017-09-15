var Joi = require('joi');

let modules = module.exports = {};

/**
 * @param {Object} data Object to validate agaists joi schema.
 * @param {Object} schema A valid joi schema.
 */
modules.validate = (data, schema)=> {
	let ret = Joi.validate(data, schema, {
		allowUnknown: true,
		abortEarly:false
	});

	if(ret.error){
		let errors = [];
		ret.error.details.forEach((element) => {
			errors.push({
				key: element.path,
				value:element.message
			});
		});
		return ({error:true, errors: errors});
	}
	else{
		return ({error:false});
	}
};

