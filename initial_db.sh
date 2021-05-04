#!/bin/bash
# This will dump the current database

docker-compose exec -T mongodb sh -c 'mongodump -d strapi -u '${1}' -p '${2}' --authenticationDatabase admin --archive' > ./app/mongo/db.dump
