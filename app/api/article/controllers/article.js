"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");
module.exports = {
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.article.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.article });
  },
  //   async findOne(ctx) {
  //     const { slug } = ctx.params;
  //     try {
  //       const article = await strapi.services.article.findOne({ slug });
  //       return ctx.send(article);
  //     } catch (error) {
  //       ctx.status = 404;
  //       return ctx.send({
  //         success: false,
  //       });
  //     }
  //   },
};
