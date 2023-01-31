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
    id: "blog",
    name: "Blog",
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
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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

                <div className="hidden sm:ml-6 sm:block">
                  <div class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                      {navigationOptions.map((navigationOption) => {
                        if (
                          !navigationOption.current &&
                          navigationOption.name == "Post"
                        ) {
                          return <></>;
                        }

                        const classToBeUsed = navigationOption.current
                          ? "ml-1 font-medium text-gray-400 md:ml-2"
                          : "inline-flex items-center text-gray-200 hover:text-gray-600";

                        return (
                          <li class="inline-flex items-center">
                            <svg
                              class="h-6 w-6 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>

                            <Link
                              to={navigationOption.href}
                              className={classNames(classToBeUsed)}
                            >
                              {navigationOption.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
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
