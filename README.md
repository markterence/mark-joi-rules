# mark-joi-rules #  

A collection of predefined Joi validation rules.

## Usage ##

```js
var MarkJoi = require('mark-joi-rules');
```

Define a [Joi](https://www.npmjs.com/package/joi) Schema 

```js
var Joi = require('Joi');
var MarkJoi = require('mark-joi-rules');

const joiSchema = Joi.object().keys({
	first_name:  MarkJoi.generic.string.required().error(() => {
		return {
			message: "* First Name is required."
		}
	}),
	last_name: MarkJoi.generic.string.required().error(() => {
		return {
			message: "* Last Name is required."
		}
	})
});
```

Validate it using *Joi*
```js
let ret = Joi.validate(data,schema);
```


### `MarkJoi.user` ###

`user.username` rules: 
- Must start with letter and contains only numbers and letters.
- Minimun is 4 characters and Maximum of 32 Characters

`user.password` rules: 
- Minimum of 8 characters and Maximum of 32 characters.
 
 

# Extra #

## `JoiSchemaValidator` ##

### Usage ###

`MarkJoiSchema.validate()` 

Accepts `data` containing a key-value pair object and a valid *Joi Type Schema* `joiSchema`, and validates it using `Joi.validate()`. 


**Return values:** 
- `error` - `true` if there is an error, otherwise `false`.
- `errors` - contains an array of `key` and `value`. Holds the error messages.
  - `key` - contains a the `key`/`field` that have the error.
  - `value` - contains the error message.

```js
var MarkJoiSchema = require('mark-joi-rules/JoiSchemaValidator');

//validate
let ret = MarkJoiSchema.validate(data, joiSchema);
if(ret.error){
	return({ message: ret.errors } );
	//returns error messages
}
```