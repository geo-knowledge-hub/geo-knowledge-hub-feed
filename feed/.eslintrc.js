/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["react-app", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        singleQuote: false,
        trailingComma: "es5",
        semi: false,
        tabWidth: 2,
      },
    ],
  },
}
