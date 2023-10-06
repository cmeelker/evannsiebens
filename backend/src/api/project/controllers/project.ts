/**
 * project controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::project.project",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const entity = await strapi.db.query("api::project.project").findOne({
        where: { slug },
      });

      const sanitizedEntity = await this.sanitizeOutput(entity);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
