// //const mysql = require('mysql2')
// require('dotenv').config();

// const connection = mysql.createConnection ({
//     host: 'localhost',
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
    
// });

// module.exports = connection;

const { Pool } = require('pg');

const pool = new Pool(
    {
      // TODO: Enter PostgreSQL username
      user: 'postgres',
      // TODO: Enter PostgreSQL password
      password: 'Belle123$$$',
      host: 'localhost',
      database: 'employee_tracker'
    },
    console.log(`Connected to database.`)
  )
  
//   const connection = pool.connect();
  module.exports = pool