#!/bin/bash
# This will dump the current database

docker-compose exec -T mongodb sh -c 'mongo -u '${1}' -p '${2}'
