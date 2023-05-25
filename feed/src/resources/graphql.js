/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import { graphql } from "gatsby";

export const query = graphql`
  fragment FeedItem on STRAPI_POST {
    id
    slug
    title
    description
    category {
      name
    }
    author {
      name
      email
    }
  }
`;
