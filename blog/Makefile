generate:  ## Generate the static pages
	docker build -t "geoknowledgehub/geo-knowledge-hub-blog:0.1" .
	docker run \
		--rm \
		-v geo_knowledge_hub_blog:/app/site/public \
		--env-file ${PWD}/.env \
		geoknowledgehub/geo-knowledge-hub-blog:0.1

configure:  ## Configure the environment to build the application
	docker volume create geo_knowledge_hub_blog

#
# Documentation function (thanks for https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html)
#
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
