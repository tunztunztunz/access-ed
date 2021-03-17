exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      services: allSanityServicePage {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  if (data.errors) {
    throw data.errors;
  }

  data.services.nodes.forEach((service, index) => {
    const path = `/services/${service.slug.current}`;
    createPage({
      path,
      component: require.resolve('./src/templates/Service.tsx'),
      context: { slug: service.slug.current },
    });
  });
};
