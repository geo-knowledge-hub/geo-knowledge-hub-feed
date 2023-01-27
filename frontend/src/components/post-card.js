/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";
import { Link, graphql } from "gatsby";

const PostCard = ({ post }) => {
  return (
    <Link
      to={`/post/${post.slug}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="px-4 py-4">
        <h3 className="font-bold text-neutral-700">{post.title}</h3>
        <p className="mt-2 text-neutral-500 line-clamp-2">{post.description}</p>
      </div>
    </Link>
  );
};

export const query = graphql`
  fragment PostCard on STRAPI_POST {
    id
    slug
    title
    description
  }
`;

export default PostCard;
