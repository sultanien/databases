const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'world'
});


const answers = [
    'SELECT name FROM country WHERE Population > 8000000',
    'SELECT name FROM country WHERE name LIKE "%land%"',
    'SELECT name FROM city WHERE Population BETWEEN 500000 AND 1000000',
    'SELECT name FROM country WHERE Continent ="Europe"',
    'SELECT name, SurfaceArea FROM country ORDER BY SurfaceArea DESC',
    'SELECT name FROM city WHERE CountryCode = "NLD"',
    'SELECT population FROM world.city WHERE Name = "Rotterdam"',
    'SELECT name FROM country ORDER BY SurfaceArea DESC LIMIT 10',
    'SELECT name FROM city ORDER BY Population DESC LIMIT 10',
    'SELECT SUM(Population) World_Population FROM country'
]


connection.connect((err) =>{
    if(err) throw err;
    console.log('MySql is connected')
});




const processQuery = (query) => {
    connection.query(query, (err, result) => {
        if (err) throw err;
        console.table(result);
    });
};

answers.forEach(answer =>{
    processQuery(answer);
});

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});
 