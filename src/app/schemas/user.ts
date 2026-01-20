import Joi from "joi";

export const userSchemas = Joi.object({
  email: Joi.string().email({ 
    minDomainSegments: 2, 
    tlds: { allow: ['com', 'net'] } 
  }).required(),
  password: Joi.string().max(10).required(),
});

export const userIdShema = Joi.object({
  id: Joi.string().required(),
});
