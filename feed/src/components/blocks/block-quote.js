/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";

import * as styles from "./styles.module.css";

import { checkBlockObject } from "../../resources/checker";

/**
 * Blockquote render block.
 */
export const BlockQuote = ({ data }) => {
  const isValid = checkBlockObject(data, ["title", "quoteBody"]);

  return (
    <>
      {isValid ? (
        <div className="padding-top--md padding-bottom--md">
          <blockquote className={styles.quote}>
            <p>{data.title}</p>
            <cite>{data.quoteBody}</cite>
          </blockquote>
        </div>
      ) : null}
    </>
  );
};
