
import Joi from 'joi';

const validator = (identifier, data) => {
  let schema = false;
  const options = {
    allowUnknown: true,
    abortEarly: false,
  };
  switch (identifier) {
    case 'article': {
      schema = {
        title: Joi.string().trim().min(5).required(),
        content: Joi.string().trim().required(),
        user: Joi.number().required(),
        category: Joi.number(),
        tags: Joi.array(),
        agelimit: Joi.number().required(),
      };
      break;
    }
    default: {
      schema = false;
    }
  }
  return Joi.validate(data, schema, options);
};

const validationErrors = (res, error) => {
  const errorMessage = error.details.map(d => d.message);
  return res.status(400).send({
    status: 400,
    error: errorMessage,
  });
};


export {
  validator,
  validationErrors,
};
