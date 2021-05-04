#!/bin/bash
# This will dump the current database

docker exec mongo_strapi sh -c 'exec mongodump -d strapi -u '${1}' -p '${2}' --authenticationDatabase admin --archive' > ./app/mongo/initial_db.archive
