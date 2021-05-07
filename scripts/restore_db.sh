#!/bin/bash
# This will restore the dumped db

docker-compose exec -T mongodb sh -c 'mongorestore -d strapi -u '${1}' -p '${2}' --authenticationDatabase admin --archive' < ./app/mongo/db.dump
