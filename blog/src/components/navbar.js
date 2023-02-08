/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";
import { Link } from "gatsby";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigationOptions = [
  {
    id: "documentation",
    name: "Documentation",
    href: "https://gkhub.earthobservations.org/doc/docs/introduction/",
    current: false,
  },
  {
    id: "feed",
    name: "Feed",
    href: "/",
    current: true,
    internal: true,
  },
  {
    id: "post",
    name: "Post",
    href: "#",
    current: false,
    internal: true,
  },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Navbar = ({ currentPageId }) => {
  // Defining which page is the current one
  navigationOptions.forEach((navigationOption, index) => {
    navigationOption.current = false;
    if (navigationOption.id === currentPageId) {
      navigationOption.current = true;
    }
  });

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="container">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://gkhub.earthobservations.org/doc/img/base/logo-blue.svg"
                    alt="GEO Knowledge Hub logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://gkhub.earthobservations.org/doc/img/base/logo-blue.svg"
                    alt="GEO Knowledge Hub logo"
                  />
                </div>

                <nav class="px-5 py-3 rounded-md w-full">
                  <ol class="list-reset flex">
                    {navigationOptions.map((navigationOption, index) => {
                      // Checking for post pages
                      if (
                        !navigationOption.current &&
                        navigationOption.id === "post"
                      ) {
                        return <></>;
                      }

                      // Checking the next page
                      let nextPage = navigationOptions.at(index + 1);

                      if (
                        navigationOption.current &&
                        navigationOption.id === "feed"
                      ) {
                        nextPage = undefined;
                      }

                      const classToBeUsed = navigationOption.current
                        ? "font-medium text-gray-400"
                        : "inline-flex items-center text-gray-200 hover:text-gray-600";

                      return (
                        <>
                          <li>
                            <Link
                              to={navigationOption.href}
                              className={classNames(classToBeUsed)}
                            >
                              {navigationOption.name}
                            </Link>
                          </li>

                          {nextPage !== undefined ? (
                            <li>
                              <span class="text-gray-500 mx-2">/</span>
                            </li>
                          ) : null}
                        </>
                      );
                    })}
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigationOptions.map((navigationOption) => {
                // Excluding posts
                if (navigationOption.id !== "post") {
                  return (
                    <Disclosure.Button
                      key={navigationOption.name}
                      as="a"
                      href={navigationOption.href}
                      className={classNames(
                        navigationOption.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={
                        navigationOption.current ? "page" : undefined
                      }
                    >
                      {navigationOption.name}
                    </Disclosure.Button>
                  );
                }

                return <></>;
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
