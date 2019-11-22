# Description

This project is an example who provide a single endpoint to will be consumed by another service.

## Requirements
  - Docker
  - Docker compose
  - Mysql Client

## Installation

1) Clone this repositories

2) Edit your hosts file, typically located in `/etc/hosts` and add the following line : 
```
127.0.0.1 user.local
```
3) Into the **users** folder run the following commands:
```sh
$ cp .env.example .env
```
4) You may replace these ENV VARS. For `DB_CONNECTION` put `mysql` (that is the container's name).

5) After that run the following commands : 
```sh
$ docker run -v $(pwd):/app prooph/composer:7.2 install
$ docker-compose up
```

6) You may create into docker container a database with the same name that you set up the user service

7) Run `docker-compose run user php artisan migrate --seed`
