/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";
import clsx from "clsx";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./styles.module.css";

/**
 * Component to render a video.
 */
const Video = ({ data }) => {
  return (
    <div className={"container flex-centered"}>
      <video
        className={clsx("border", styles.video)}
        autoPlay
        loop
        controls
        muted
      >
        <source src={data.file.localFile.url} type="video/mp4" />
      </video>
    </div>
  );
};

/**
 * Component to render a image.
 */
const Image = ({ data }) => {
  return (
    <GatsbyImage
      image={getImage(data.file.localFile)}
      alt={data.file.alternativeText}
      className={clsx("border", styles.image)}
    />
  );
};

/**
 * Component to render multimedia (e.g., video, image).
 */
export const Media = ({ data }) => {
  const isVideo = data.file.mime.startsWith("video");

  return <>{isVideo ? <Video data={data} /> : <Image data={data} />}</>;
};
