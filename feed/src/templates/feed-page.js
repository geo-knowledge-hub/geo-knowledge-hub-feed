/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";
import { graphql } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Seo, Layout } from "../components/pages";
import { BlocksRenderer } from "../components/blocks";
import { checkBlockObject } from "../resources/checker";

const FeedPage = ({ data, ...props }) => {
  const feed = data.strapiPost;

  const seo = {
    metaTitle: feed.title,
    metaDescription: feed.description,
  };

  const isValid = checkBlockObject(feed, [
    "title",
    "description",
    "author.avatar",
  ]);

  return (
    <>
      {isValid ? (
        <Layout>
          <Seo seo={seo} />
          <header className={"container margin-top--md"}>
            <div className={"row flex-centered"}>
              <div className={"col col--9"}>
                <div className={"hero"}>
                  <div className={"container"}>
                    <h1 className={"hero__title"}>{feed.title}</h1>
                    <p className={"hero__subtitle"}>{feed.description}</p>

                    <div className={"container"}>
                      <div className={"row"}>
                        <div className={"col col--6"}>
                          <div className={"avatar"}>
                            <a
                              className="avatar__photo-link avatar__photo avatar__photo--md"
                              href={"#"}
                            >
                              <GatsbyImage
                                className="h-9 w-9 rounded-full border-b-2"
                                image={getImage(feed.author.avatar.localFile)}
                                alt="Author avatar"
                              />
                            </a>
                            <div className="avatar__intro">
                              <div className="avatar__name">
                                {feed.author.name}
                              </div>
                              <small className="avatar__subtitle">
                                {feed.author.institution}
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className={"col col--6 right-aligned"}>
                          <div className="addthis_toolbox addthis_32x32_style">
                            <a className="addthis_button_twitter"></a>
                            <a className="addthis_button_facebook"></a>
                            <a className="addthis_button_email"></a>
                            <a className="addthis_button_linkedin"></a>
                            <a className="addthis_button_compact"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className={"container margin-top--sm margin-bottom--xl"}>
            <div className={"row flex-centered"}>
              <div className={"col col--8"}>
                <BlocksRenderer blocks={feed.blocks || []} />
              </div>
            </div>
          </main>
        </Layout>
      ) : null}
    </>
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

export default FeedPage;
