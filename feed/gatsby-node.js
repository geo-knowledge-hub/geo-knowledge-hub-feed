/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const feedPage = path.resolve("./src/templates/feed-page.js")

  const result = await graphql(
    `
      {
        allStrapiPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your GEO Knowledge Hub Feed data`,
      result.errors
    )

    return
  }

  const feed = result.data.allStrapiPost.nodes

  if (feed.length > 0) {
    feed.forEach((feedItem) => {
      createPage({
        path: `/feed/${feedItem.slug}`,
        component: feedPage,
        context: {
          slug: feedItem.slug,
        },
      })
    })
  }
}
