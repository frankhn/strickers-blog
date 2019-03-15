import joi from 'joi';

// Comments validatoins
const createComment = joi.object().keys({
  id: joi.number(),
  comment: joi.string(),
  article: joi.number()
    .required(),
  user: joi.number()
    .required(),
});

const getChema = joi.object().keys({
  id: joi.number(),
});

const updateSchema = joi.object().keys({
  id: joi.number(),
  comment: joi.string()
    .required(),
});

export default {
  createComment,
  updateSchema,
  getChema,
};
