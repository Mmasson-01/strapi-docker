#!/bin/bash
# use with one container at a time
# ex: $ ./rebuild backend_strapi

docker-compose stop $1 && docker-compose rm -f $1 && docker-compose build $1 && docker-compose up -d $1
