CREATE TABLE users
(
    id    BIGSERIAL PRIMARY KEY,
    name  VARCHAR(100)        NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(150)
);