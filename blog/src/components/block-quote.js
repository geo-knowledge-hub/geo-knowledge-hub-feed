/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react"

const BlockQuote = ({ data }) => {
  return (
    <div className="py-6">
      <blockquote className="container max-w-xl border-l-4 border-neutral-700 py-2 pl-6 text-neutral-700">
        <p className="text-5xl font-medium italic">{data.title}</p>
        <cite className="mt-4 block font-bold uppercase not-italic">
          {data.quoteBody}
        </cite>
      </blockquote>
    </div>
  )
}

export default BlockQuote
