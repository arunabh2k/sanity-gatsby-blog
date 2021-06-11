export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c352db8b9178267c8f57d0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-du2551gt",
                  apiId: "a0bc7058-4c19-4eb7-bf60-a11aa842b584",
                },
                {
                  buildHookId: "60c352db47d22c317ed2eb57",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-c5nfpb32",
                  apiId: "43c1254a-8468-4577-a96e-3ecf81dd65a9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/arunabh2k/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-c5nfpb32.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
