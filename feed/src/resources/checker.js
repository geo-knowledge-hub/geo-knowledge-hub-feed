/*
 * This file is part of GEO Knowledge Hub Feed.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

/**
 * Lodash isNil basic implementation.
 * @private
 */
const _isNil = (object, path) => {
  const pathArr = path.split(".");
  let currentObj = object;

  for (let i = 0; i < pathArr.length; i++) {
    if (currentObj === null || currentObj === undefined) {
      return true;
    }
    currentObj = currentObj[pathArr[i]];
  }
  return currentObj === null || currentObj === undefined;
};

/**
 * Function to check if a given object can be used in a render block.
 */
export const checkBlockObject = (obj, properties) => {
  return properties.every((property) => {
    return _isNil(obj, property) !== true;
  });
};
