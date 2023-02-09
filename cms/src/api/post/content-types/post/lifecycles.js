/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

const { TwitterApi } = require("twitter-api-v2");

/**
 * Lifecycle states.
 */
const LIFECYCLE_STATES = {
    share: "sharePost"
}

module.exports = {
    beforeUpdate(event) {          
        const { publishedAt } = event.params.data;

        if (!([undefined, null].includes(publishedAt))) {
            event.state = LIFECYCLE_STATES.share;
        }
    },

    afterUpdate(event) {
        const { state, result: postObject} = event;

        if (state === LIFECYCLE_STATES.share) {
            // ToDo: This can be a service
            const baseClient = new TwitterApi(strapi.config.hooks.settings.twitter);
            const twitterClient = baseClient.readWrite;

            // ToDo: Review this hard coded solution.
            twitterClient.v2.tweet(`
                📢 New Knowledge Package available @ GEO Knowledge Hub
                
                Title: ${postObject.title}
                Description: ${postObject.description}
                Blog post: <Blog post address>

                Access the package: <GEO Knowledge Hub address>
            `);
        }
    }
}
