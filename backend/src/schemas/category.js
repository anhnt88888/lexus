import joi from "joi";

export const categorySchema = joi.object({
  name: joi.string().min(6).max(255).required(),
  products: joi.array().items(joi.string()),
});
