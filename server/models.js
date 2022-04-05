//require pool from postgres
const { Pool } = require('pg');

//create a new pool with the connection string
const PG_URI= 'postgres://qudgsiex:UwR6B7gh5nyDcRenqpftUJqvZFQcygQE@batyr.db.elephantsql.com/qudgsiex';

const pool = new Pool({
  connectionString: PG_URI,
})

/* 
4 real plants
CREATE TABLE real_shop (
id SERIAL PRIMARY KEY,
common_name VARCHAR(25) NOT NULL,
botanical_name VARCHAR(25) NOT NULL,
description VARCHAR(250) NOT NULL,
light VARCHAR(25) NOT NULL,
hardiness_zone VARCHAR(25) NOT NULL,
pet_friendly BOOLEAN NOT NULL,
difficulty VARCHAR(25) NOT NULL,  
price INT, 
url VARCHAR,
)

4 fake plants
CREATE TABLE fake_plants (
id SERIAL PRIMARY KEY,
common_name VARCHAR(25) NOT NULL,
botanical_name VARCHAR(25) NOT NULL,
description VARCHAR(250) NOT NULL,
pet_friendly BOOLEAN NOT NULL,
difficulty VARCHAR(25) NOT NULL, 
price INT, 
url VARCHAR
)

Users 
CREATE TABLE allthumbs_users (
id SERIAL PRIMARY KEY,
username VARCHAR(25) UNIQUE NOT NULL, 
)
*/

//export query
module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query ', text);
    return pool.query(text, params, callback);
  }
};

//express session => look into higher level compared to cookie




  