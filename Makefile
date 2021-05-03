default: start

.PHONY: start clean reset

start:
	docker-compose start

stop:
	docker-compose stop

restart:
	docker-compose restart

pull:
	docker-compose pull

build:
	docker-compose up -d

log:
	docker-compose logs --tail=all -f | grep backend_strapi

clean:
	docker-compose down --rmi all -v

reset: clean build


