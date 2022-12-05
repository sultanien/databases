const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'meetup'
});
 
connection.connect((err) =>{
    if(err) throw err;
    console.log('MySql is connected')
});

//Create a table

const tables = [
    `CREATE TABLE IF NOT EXISTS Invitee(
        invitee_no TINYINT AUTO_INCREMENT, 
        invitee_name VARCHAR(75), 
        invited_by VARCHAR(75), 
        PRIMARY KEY(invitee_no))`,
    `CREATE TABLE IF NOT EXISTS Room(
        room_no TINYINT, 
        room_name VARCHAR(75), 
        floor_number TINYINT, 
        PRIMARY KEY(room_no))`,
    `CREATE TABLE IF NOT EXISTS Meeting(
        meeting_no TINYINT, 
        meeting_title VARCHAR(255), 
        starting_time TIMESTAMP, ending_time TIMESTAMP,room_no TINYINT)`
];

const insertValues = [
    `INSERT INTO Invitee(invitee_name, invited_by) 
        Values('Jack', 'Daniel'),
        ('Wouter', 'Rob'), 
        ('Sultan', 'Ali'), 
        ('Eda', 'Mustafa'), 
        ('Rob', 'Heba')`,
    `INSERT INTO Room
        Values(32, 'Ideation Zone', 3), 
        (21, 'Creative Arena', 2), 
        (22, 'Team Territory', 2), 
        (11, 'SkyNet', 1), 
        (15, 'Cranium Focus', 1)`,
    `INSERT INTO Meeting 
        Values(1, 'Intech International', '2023-01-11,10:00', '2023-01-11 12:00', 32), 
        (2, 'Sales-Con','2023-01-12 10:00', '2023-01-12 12:00', 21), 
        (3, 'CyberMeet','2023-01-11 09:00', '2023-01-11 11:00', 22), 
        (4, 'Earth Space','2023-01-12 13:00', '2023-01-12 15:00', 11), 
        (5, 'Goference' , '2023-01-12 09:00', '2023-01-12 11:00', 15)`
]

const result = [
    `SELECT * FROM Invitee`,
    `SELECT * FROM Room`,
    `SELECT * FROM Meeting`
]

const createTable = (table) =>{
    connection.query(table, (err, result) => {
        if (err) throw err;
        console.log("table is added");
    });
};

const addValue = (value) =>{
    connection.query(value, (err, result) => {
        if (err) throw err;
        console.log('values are added');
    });
};

const showTable = (table) => {
    connection.query(table, (err, result) => {
        if (err) throw err;
        console.table(result);
    });
}


const dropTables = () => {
    const sql = `DROP TABLE Room , Meeting , Invitee`;
    connection.query(sql, (err, result) => {
      if (err) console.log(err);
      console.log("Tables are dropped");
    });
  };
dropTables();


tables.forEach(table => createTable(table));
insertValues.forEach(value => addValue(value));
result.forEach(table => showTable(table));


app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});