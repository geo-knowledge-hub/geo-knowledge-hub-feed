/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

import logoHub from "../../assets/logo-gkhub.svg";

import * as styles from "./layout.module.css";

// General configurations
const navbarItems = [
  {
    name: "Feed",
    position: "left",
    url: "/feed",
  },
  {
    name: "User guides",
    position: "left",
    url: "https://gkhub.earthobservations.org/doc/docs/introduction/",
  },
  {
    name: "Development",
    position: "left",
    url: "https://gkhub.earthobservations.org/doc/development/introduction/",
  },
  {
    name: "Releases",
    position: "left",
    url: "https://gkhub.earthobservations.org/doc/releases",
  },
  {
    name: "GitHub",
    position: "right",
    url: "https://github.com/geo-knowledge-hub/geo-knowledge-hub-cms",
    icon: (
      <svg
        width="13.5"
        height="13.5"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="iconExternalLink_I5OW"
      >
        <path
          fill="currentColor"
          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
        ></path>
      </svg>
    ),
    target: "_blank",
  },
];

const footerItems = [
  {
    name: "Digital library",
    url: "/",
  },
  {
    name: "Documentation",
    url: "/doc",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/geosec2025",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCFJ97Bp2XXA5p7ik_wWSoqg",
  },
];

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div>
        <Navbar
          title={"GEO Knowledge Hub"}
          brand={logoHub}
          items={navbarItems}
        />
        {children}
      </div>
      <Footer items={footerItems} />
    </div>
  );
};
