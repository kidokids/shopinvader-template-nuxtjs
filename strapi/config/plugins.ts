module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  menus: {
    config: {
      maxDepth: 3,
    },
  },
  "drag-drop-content-types": {
    enabled: true,
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
});
