-- Active: 1710342347852@@127.0.0.1@3306@world
SHOW TABLES;

SELECT "dhiraj" AS name;

SELECT DISTINCT (CountryCode) FROM city c;

SELECT * FROM city LIMIT 10;

SELECT DISTINCT (name)
FROM city
WHERE
    `Population` BETWEEN 1780000 AND 2000000;

SELECT name FROM city WHERE NOT name = 'Kabul';