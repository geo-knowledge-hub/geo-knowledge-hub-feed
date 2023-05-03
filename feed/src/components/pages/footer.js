/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";

export const Footer = ({ items }) => {
  return (
    <footer className={"footer"}>
      <div className={"container container--fluid"}>
        <div className={"footer__links"}>
          {items.map((item, index) => {
            let linkElement, separatorElement;

            linkElement = (
              <a
                className="footer__link-item"
                href={item.url}
                target={"_blank"}
              >
                {item.name}
              </a>
            );

            if (index !== items.length - 1) {
              separatorElement = (
                <span className="footer__link-separator">&middot;</span>
              );
            }

            return (
              <>
                {linkElement}
                {separatorElement}
              </>
            );
          })}
        </div>
        <div>GEO Knowledge Hub</div>
      </div>
    </footer>
  );
};
