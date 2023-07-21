import joi from "joi";

export const productSchema = joi.object({
  name: joi.string().min(6).max(255).required(),
  price: joi.number().required(),
  desc: joi.string().required(),
  image: joi.string().required(),
  categoryId: joi.string(),
});
