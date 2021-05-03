default: start

.PHONY: start clean reset

start:
	docker-compose start

pull:
	docker-compose pull

build:
	docker-compose up -d

log:
	docker-compose logs --tail=all -f | grep backend_strapi

clean:
	docker-compose down --rmi all -v

reset: clean build


