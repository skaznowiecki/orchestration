# Service orchestrator
There are two services, one is a Lumen (PHP) Rest Api that provide an api for listing users, the another service was developed on nodejs that consume that Api. 

### Requirements
  - Docker
  - Docker compose
  - Mysql Client
  
### Installation
1) Clone this repositories

2) Edit your hosts file, typically located in `/etc/hosts` and add the following line : 
```
127.0.0.1 front.local user.local
```

3) Into the **users** folder run the following commands:
```sh
$ cp .env.example .env
```
4) You may replace these ENV VARS. For `DB_CONNECTION` put `mysql` (that is the container's name).

6) After that run the following command into **user**: 
```sh
$ docker run -v $(pwd):/app prooph/composer:7.2 install
```
7) In root folder run these commands : 
```sh
$ docker network create --driver=bridge --subnet=172.27.0.0/16 app_net
$ docker-compose up
```

8) You may create into docker container a database with the same name that you set up the user service

9) For create database structure and mock data run the following command :  
```sh
$ docker-compose run user php artisan migrate --seed
```

### Structure
```
o
|-- docker-compose.yml
|-- proxy
|   |-- hosts
|   |   |-- front.conf
|   |   `-- user.conf
|   `-- Dockerfile
|-- front
|   |-- src/
|   |-- Dockerfile
|   `-- docker-compose.yml
`-- users
    |-- server
    |   |-- user.conf
    |   `-- Dockerfile.web
    |-- Dockerfile
    `-- docker-compose.yml
```