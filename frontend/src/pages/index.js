/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react"
import 'tw-elements';
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import PostsGrid from "../components/posts-grid"
import Seo from "../components/seo"
import Headings from "../components/headings"

const IndexPage = () => {
  const { allStrapiPost, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiPost {
        nodes {
          ...PostCard
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      />
      <main>
        <PostsGrid posts={allStrapiPost.nodes} />
      </main>
    </Layout>
  )
}

export default IndexPage
