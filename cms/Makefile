#
# This file is part of GEO-Knowledge-Hub-CMS.
#
# Copyright (C) 2023 GEO Secretariat.
#
# GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
# under the terms of the MIT License; see LICENSE file for more details.
#

.PHONY: build* compose*

#
# Compose
#
compose-start: ## Start compose stack
	docker-compose up --build -d

compose-stop: ## Stop compose stack
	docker-compose stop

compose-down:  ## Down compose stack
	docker-compose down

compose-logs:  ## Compose stack logs
	docker-compose logs -f --tail 20

#
# Build
#
build:  ## Build CMS
	docker build -t "geo-cms:$(version)" .


build-prod:  ## Build production version of the CMS
	docker build -t "geo-cms:$(version)" -f Dockerfile.prod --build-arg PUBLIC_URL=$(url) .

#
# Documentation function (thanks for https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html)
#
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
