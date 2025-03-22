const Joi = require("joi");

const userValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    age: Joi.number().min(1).required(),
  });

  return schema.validate(data);
};

module.exports = userValidation;
