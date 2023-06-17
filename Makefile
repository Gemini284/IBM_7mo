### DEV

build-dev:
	cd client && $(MAKE) build-dev
	cd server && $(MAKE) build

run-dev:
	docker-compose -f docker-compose-dev.yml up

### LOCAL (prod config)

build-local:
	cd client && $(MAKE) build-local
	cd server && $(MAKE) build

run-local:
	ENV=local docker-compose -f docker-compose-production.yml up
		

### PROD

build-production:
	cd client && $(MAKE) build-production
	cd server && $(MAKE) build	

run-production:
	ENV=production docker-compose -f docker-compose-production.yml up
	
stop:
	docker-compose down


### REMOTE

SSH_STRING:=root@146.190.154.223

ssh:
	ssh $(SSH_STRING)


# apt install make

copy-files:
	rsync -avz --progress ./* $(SSH_STRING):/root/

# when you add firewall rule, have to add SSH on port 22 or it will stop working

# run challenge with cloudflare on flexible, then bump to full


