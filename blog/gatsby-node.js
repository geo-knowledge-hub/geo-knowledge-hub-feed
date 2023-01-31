const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const postPage = path.resolve("./src/templates/post-page.js")

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
      `There was an error loading your GEO Knowledge Hub CMS Posts`,
      result.errors
    )

    return
  }

  const posts = result.data.allStrapiPost.nodes

  if (posts.length > 0) {
    posts.forEach((post) => {
      createPage({
        path: `/post/${post.slug}`,
        component: postPage,
        context: {
          slug: post.slug,
        },
      })
    })
  }
}
