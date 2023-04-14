/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";

/**
 * Auxiliary function to generate navbar items.
 */
const generateNavItem = (position) => {
  return (item, index) => {
    if (item.position === position) {
      return (
        <a
          key={index}
          className={"navbar__item navbar__link"}
          href={item.url}
          target={item.target}
        >
          {item.name}
          {item.icon}
        </a>
      );
    }

    return null;
  };
};

/**
 * Navbar component.
 */
export const Navbar = ({ title, brand, items }) => {
  return (
    <div className={"navbar"}>
      <div className={"navbar__inner"}>
        <div className={"navbar__items"}>
          <a className={"navbar__brand"} href={"/"}>
            <div className={"navbar__logo"}>
              <img src={brand} alt={title} />
            </div>
            <b className={"navbar__title"}>{title}</b>
          </a>
          {items.map(generateNavItem("left"))}
        </div>
        <div className={"navbar__items navbar__items--right"}>
          {items.map(generateNavItem("right"))}
        </div>
      </div>
    </div>
  );
};
