/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";

import { Media } from "./media";

import { checkBlockObject } from "../../resources/checker";

/**
 * MultiMedia (Video, Image) render block.
 */
export const BlockMedia = ({ data }) => {
  const isValid = checkBlockObject(data, ["file"]);

  return (
    <>
      {isValid ? (
        <div className={"padding-bottom--lg"}>
          <Media data={data} />
        </div>
      ) : null}
    </>
  );
};
