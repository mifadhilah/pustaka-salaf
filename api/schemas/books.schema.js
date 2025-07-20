const Joi = require("joi");

const baseBookSchema = Joi.object({
  isbn: Joi.string().allow(null, ''),
  title: Joi.string(),
  page_count: Joi.number().integer(),
  description: Joi.string().allow(null, ''),
  author_id: Joi.string().uuid(),
  publisher_id: Joi.string().uuid(),
  category_id: Joi.string().uuid(),
  source_book_id: Joi.string().uuid().allow(null),
  cover_image_url: Joi.string().uri().allow(null, ''),
  language: Joi.string(),
  dimension_height: Joi.number().allow(null),
  dimension_width: Joi.number().allow(null),
  dimension_depth: Joi.number().allow(null),
  weight: Joi.number().allow(null),
  edition: Joi.string().allow(null, ''),
  ebook_link: Joi.string().uri().allow(null, ''),
  buy_link: Joi.string().uri().allow(null, ''),
  is_sold_out: Joi.boolean(),
  is_visible: Joi.boolean(),
  published_at: Joi.date().iso()
});

const createBookSchema = baseBookSchema.fork(
  ["title", "page_count", "author_id", "publisher_id", "category_id", "language", "published_at"],
  (schema) => schema.required()
);

const updateBookSchema = baseBookSchema.optional();

module.exports = {
  createBookSchema,
  updateBookSchema
};
