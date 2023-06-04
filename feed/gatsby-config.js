/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "/",
  assetPrefix: process.env.ASSETS_PATH_PREFIX || "/",
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "post",
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                blocks: {
                  populate: "*",
                },
                author: "*",
                category: "*"
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "category",
          },
        ],
        singleTypes: [
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*",
                },
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "pages",
        engine: "flexsearch",
        engineOptions: "speed",
        query: `
          {
            allStrapiPost {
              nodes {
                id
                title
                description
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "description"],
        store: ["id", "path", "title"],
        normalizer: ({ data }) =>
          data.allStrapiPost.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            description: node.description,
          })),
      },
    },
    {
      resolve: "gatsby-plugin-asset-path"
    }
  ],
};
