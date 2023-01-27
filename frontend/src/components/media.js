/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Video = ({data}) => {
  return (
    <div className="flex flex-col items-center">
      <video
        className="clip w-9/12 rounded-md shadow-2xl"
        autoplay
        loop
        controls
        muted
      >
        <source src={data.file.localFile.url} type="video/mp4" />
      </video>
    </div>
  );
};

const Image = ({data}) => {
  return (
    <GatsbyImage
      image={getImage(data.file.localFile)}
      alt={data.file.alternativeText}
    />
  );
};

const Media = ({ data }) => {
  const isVideo = data.file.mime.startsWith("video");

  return <>{isVideo ? <Video data={data} /> : <Image data={data} />}</>;
};

export default Media
