/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React, { useState } from "react";
import clsx from "clsx";

import * as styles from "./feed.module.css";

import { checkBlockObject } from "../../resources/checker";

/**
 * General
 */
const requiredProperties = ["id", "title", "description", "author"];

/**
 * Item component for the Feed.
 */
const FeedItem = ({ title, description, link }) => {
  return (
    <div className={clsx("card", "margin-bottom--md", styles.cardShadow)}>
      <div className={"card__header"}>
        <h4>{title}</h4>
      </div>
      <div className={"card__body"}>
        <p>{description}</p>
      </div>
      <div className={clsx("card__footer", styles.readButton)}>
        <a href={link} className={"button button--secondary"}>
          Read
        </a>
      </div>
    </div>
  );
};

/**
 * Feed panel component with pagination.
 */
const FeedPanel = ({ feedItems, itemsPerPage = 6 }) => {
  // States
  const [currentPage, setCurrentPage] = useState(1);

  // Validation
  const validFeedItems = feedItems.filter((feedItem) => {
    return checkBlockObject(feedItem, requiredProperties);
  });

  // Pagination
  const totalPages = Math.ceil(validFeedItems.length / itemsPerPage);

  const paginatedItems = validFeedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={"container"}>
      <div className={"row"}>
        {paginatedItems.map((feed, index) => (
          <div key={index} className="col col--4">
            <FeedItem
              title={feed.title}
              description={feed.description}
              link={`/feed/${feed.slug}`}
            />
          </div>
        ))}
      </div>
      <div className={"row flex-centered"}>
        <nav>
          <ul className={"pagination margin-top--md"}>
            <li
              className={`pagination__item ${
                currentPage === 1 ? "disabled" : ""
              }`}
            >
              <a
                className={"pagination__link"}
                onClick={() => {
                  if (currentPage !== 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
                href={"#"}
              >
                Previous
              </a>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`pagination__item ${
                  currentPage === index + 1 ? "disabled" : "active"
                }`}
              >
                <a
                  className="pagination__link"
                  onClick={() => setCurrentPage(index + 1)}
                  href={"#"}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li
              className={`pagination__item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <a
                className="pagination__link"
                onClick={() => setCurrentPage(currentPage + 1)}
                href={"#"}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

/**
 * Grid component to present feed items.
 */
export const FeedGrid = ({ feedItems }) => {
  return (
    <div className={"margin-top--xl margin-bottom--lg"}>
      <FeedPanel feedItems={feedItems} itemsPerPage={9} />
    </div>
  );
};
