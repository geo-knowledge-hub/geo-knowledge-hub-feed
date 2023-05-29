#
# This file is part of GEO-Knowledge-Hub-CMS.
#
# Copyright (C) 2023 GEO Secretariat.
#
# GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
# under the terms of the MIT License; see LICENSE file for more details.
#

.PHONY: feed* services*

#
# Services
#
services-start:  ## Start required services to run the Feed
	cd cms && docker-compose -f docker-compose.services.yml up -d

#
# Feed
#
feed-start: services-start  ## Start the feed
	yarn
	yarn develop

#
# Documentation function (thanks for https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html)
#
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
