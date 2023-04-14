/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";
import clsx from "clsx";

import * as styles from "./styles.module.css";

import { checkBlockObject } from "../../resources/checker";

/**
 * Rich Text render block.
 */
export const BlockRichText = ({ data }) => {
  const isValid = checkBlockObject(data, ["richTextBody"]);

  return (
    <>
      {isValid ? (
        <div
          className={clsx("padding-top--md padding-bottom--md", styles.text)}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: data.richTextBody.data.childMarkdownRemark.html,
            }}
          />
        </div>
      ) : null}
    </>
  );
};
