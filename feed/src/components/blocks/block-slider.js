/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";
import clsx from "clsx";

import Slider from "react-slick";

import { Media } from "./media";

import * as styles from "./styles.module.css";

import { checkBlockObject } from "../../resources/checker";

/**
 * Media slider (Video, Image) render block.
 */
export const BlockSlider = ({ data }) => {
  const isValid = checkBlockObject(data, ["files"]);
  const files = data.files || [];

  return (
    <>
      {isValid ? (
        <div
          className={clsx(
            "container padding-top--lg padding-bottom--lg",
            styles.slider
          )}
        >
          <Slider
            dots={true}
            infinite={false}
            speed={300}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={true}
            swipe={true}
            adaptiveHeight={true}
            lazyLoad={true}
          >
            {files.map((file) => (
              <Media key={file.id} data={{ file: file }} />
            ))}
          </Slider>
        </div>
      ) : null}
    </>
  );
};
