/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react"
import PostCard from "./post-card"

const PostsGrid = ({ posts }) => {
  return (
    <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  )
}

export default PostsGrid
