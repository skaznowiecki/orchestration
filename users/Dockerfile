FROM php:7.3-fpm

RUN apt-get update

RUN apt-get install -y libmcrypt-dev sqlite3 software-properties-common apt-utils \
    && docker-php-ext-install pdo_mysql

WORKDIR /var/www

COPY ./ ./

RUN groupadd -g 1000 app && \
    useradd -r -u 1000 -g app app
USER app