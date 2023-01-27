/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";

import Media from "./media";

const BlockMedia = ({ data }) => {
  return (
    <div className="py-8">
      <Media data={data} />
    </div>
  );
};

export default BlockMedia;
