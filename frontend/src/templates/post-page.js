/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import BlocksRenderer from "../components/blocks-renderer"
import Seo from "../components/seo"

const PostPage = ({ data, ...props }) => {


  console.log("PostPage props");
  console.log(props);

  const post = data.strapiPost

  const seo = {
    metaTitle: post.title,
    metaDescription: post.description,
  }

  return (
    <Layout as="post">
      <Seo seo={seo} />
      <header className="container max-w-6xl py-8">
        <h1 className="text-5xl font-bold text-neutral-700">{post.title}</h1>
        <p className="mt-4 text-2xl text-neutral-500">{post.description}</p>
      </header>
      <main className="container">
        <BlocksRenderer blocks={post.blocks || []} />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiPost(slug: { eq: $slug }) {
      id
      slug
      title
      description
      blocks {
        ...Blocks
      }
      author {
        name
        email
        avatar {
					url
        }
      }
    }
  }
`

export default PostPage
