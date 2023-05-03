#
# This file is part of GEO Knowledge Hub Feed.
# Copyright (C) 2023 GEO Secretariat.
#
# GEO Knowledge Hub Feed is free software; you can redistribute it and/or modify it
# under the terms of the MIT License; see LICENSE file for more details.
#

FROM node:16.10.0

WORKDIR /app/site
COPY . /app/site

RUN yarn

CMD ["build"]
ENTRYPOINT ["yarn"]
