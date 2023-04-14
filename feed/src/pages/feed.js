/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useStaticQuery, graphql } from "gatsby";

import { Seo, Hero, Layout, FeedGrid } from "../components/pages";

/**
 * Feed page component.
 */
const FeedPage = () => {
  const { allStrapiPost } = useStaticQuery(graphql`
    query {
      allStrapiPost(sort: { order: DESC, fields: publishedAt }) {
        nodes {
          ...FeedItem
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `);

  return (
    <>
      <Layout>
        <Seo />
        <Hero
          title={"Welcome to the Feed"}
          description={
            "A place to keep updated about the GEO Knowledge Hub content"
          }
        />

        <main>
          <FeedGrid feedItems={allStrapiPost.nodes} />
        </main>
      </Layout>
    </>
  );
};

export default FeedPage;
