/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

module.exports = ({ env }) => ({
  sentry: {
    enabled: true,
    config: {
      dsn: env('SENTRY_DSN'),
      sendMetadata: true,
    },
  },
  'entity-notes': {
    enabled: true,
  },
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: 'GEO Knowledge Hub CMS Rest API documentation',
        description: 'Documentation of the GEO Knowledge Hub CMS Rest API',
        license: {
          name: 'MIT',
          url: 'https://opensource.org/licenses/MIT',
        },
        termsOfService: '#',
        contact: {
          name: 'GEO Secretariat',
          email: 'secretariat@geosec.org',
          url: 'https://www.earthobservations.org/index.php',
        },
      },
      'x-strapi-config': {
        plugins: ['upload', 'users-permissions'],
        path: '/documentation',
      },
      security: [{ bearerAuth: [] }],
    },
  },
});
