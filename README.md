# Strapi and Mongodb docker project

## Usefull commands

### Logging

```bash
// PWD: ./strapi-docker
$ docker-compose logs --tail=all -f | grep <container_name>
```

### Building containers (will also start by default)

```bash
// PWD: ./strapi-docker
$ docker-compose up -d
```

### Starting containers

```bash
// PWD: ./strapi-docker
$ docker-compose start
```

### Verifying containers are up and running

```bash
$ docker exec -it <container_name> /bin/bash
$ ps -ef
```

### Bringing it down

This will delete all containers, images and volumes related to the docker-compose.yml

```bash
// PWD: ./strapi-docker
$ docker-compose down --rmi all -v
```

This will only stop the running containers without destroying anything

```bash
// PWD: ./strapi-docker
$ docker-compose stop
```

### Diving into the database

You can use a GUI of follow the commands below

```bash
// PWD: ./strapi-docker
$ docker exec -it <container_name> /bin/bash
$ mongo strapi -u strapi -p --authenticationDatabase admin

$ show colelctions (example of command for mongo, please read documentation)
```
