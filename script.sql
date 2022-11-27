create table users (
    id varchar(255) not null,
    username varchar(255),
    password varchar(255) not null,
    registered datetime,
    last_login datetime,
    primary key (id), 
);