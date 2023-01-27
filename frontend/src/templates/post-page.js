/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import Layout from "../components/layout";
import BlocksRenderer from "../components/blocks-renderer";

const PostPage = ({ data, ...props }) => {
  const post = data.strapiPost;

  const seo = {
    metaTitle: post.title,
    metaDescription: post.description,
  };

  return (
    <Layout as="post">
      <Seo seo={seo} />
      <header className="container max-w-5xl py-8">
        <h1 className="text-4xl font-bold text-neutral-700">{post.title}</h1>
        <p className="mt-4 text-2xl text-neutral-500">{post.description}</p>

        <div className="mt-5 flex flex-row items-center space-x-2">
          <div>
            <GatsbyImage
              className="h-9 w-9 rounded-full border-b-2"
              image={getImage(post.author.avatar.localFile)}
              alt="Avatar"
            />
          </div>
          <div>
            <h5 class="text-md font-medium leading-tight">
              {post.author.name}
            </h5>
            <p class="text-gray-500">{post.author.institution}</p>
          </div>
        </div>
      </header>
      <main className="container max-w-5xl">
        <BlocksRenderer blocks={post.blocks || []} />
      </main>
    </Layout>
  );
};

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
        institution
        avatar {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default PostPage;
