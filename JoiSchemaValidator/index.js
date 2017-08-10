var Joi = require('Joi');

let modules = module.exports = {};

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

