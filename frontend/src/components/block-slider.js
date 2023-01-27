/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react"
import Slider from "react-slick"

import Media from "./media"

const BlockSlider = ({ data }) => {
  const files = data.files || [];

  return (
    <div className="container max-w-3xl py-8">
      <Slider
        dots={true}
        infinite={true}
        speed={300}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={true}
        swipe={true}
      >
        {files.map((file) => (
          <Media key={file.id} data={{file: file}} />
        ))}
      </Slider>
    </div>
  )
}

export default BlockSlider
