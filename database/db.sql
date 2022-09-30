CREATE DATABASE productsdb IF NOT EXISTS;

use productsdb;

CREATE TABLE product(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(20) NOT NULL,
    description  VARCHAR(300) NOT NULL,
    price DECIMAL,
    createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe product;