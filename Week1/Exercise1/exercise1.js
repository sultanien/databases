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

app.get('/invitees', (req, res) =>{

    let sql = "CREATE TABLE Invitees(invitee_no int AUTO_INCREMENT, invitee_name VARCHAR(75), invited_by VARCHAR(75), PRIMARY KEY(invitee_no))";
    connection.query(sql, (err, result) =>{

        if(err) throw err;
        console.log(result);
        res.send('Invitees table is created');
    });
});

app.get('/invitees', (req, res) =>{

    let sql = "CREATE TABLE Invitees(invitee_no int, invitee_name VARCHAR(75), invited_by VARCHAR(75), PRIMARY KEY(invitee_no))";
    connection.query(sql, (err, result) =>{

        if(err) throw err;
        console.log(result);
        res.send('Invitees table is created');
    });
});

app.get('/rooms', (req, res) =>{

    let sql = "CREATE TABLE Rooms(room_no INT, room_name VARCHAR(75), floor_number INT, PRIMARY KEY(room_no))";
    connection.query(sql, (err, result) =>{

        if(err) throw err;
        console.log(result);
        res.send('Rooms table is created');
    });
});

app.get('/meetings', (req, res) =>{

    let sql = "CREATE TABLE Meetings(meeting_no INT, meeting_title VARCHAR(255), starting_time TIME, ending_time TIME,room_no INT)";
    connection.query(sql, (err, result) =>{

        if(err) throw err;
        console.log(result);
        res.send('Meetings table is created');
    });
});


app.get('/inviteesList', (req,res) =>{
    let sql = "INSERT INTO Invitees(invitee_name, invited_by) Values('Jack', 'Daniel'), ('Wouter', 'Rob'), ('Sultan', 'Ali'), ('Eda', 'Mustafa'), ('Rob', 'Heba')";
    connection.query(sql, (err, result) =>{

        if(err) throw err;
        console.log(result);
        res.send('InviteesList is created');
    });
});

app.get('/roomsTable', (req,res) =>{
    let sql = "INSERT INTO Rooms Values(32, 'Ideation Zone', 3), (21, 'Creative Arena', 2), (22, 'Team Territory', 2), (11, 'SkyNet', 1), (15, 'Cranium Focus', 1)";
    connection.query(sql, (err, result) =>{

        if(err) throw err;
        console.log(result);
        res.send('RoomTable is implemented.');
    });
});

app.get('/meetingsList', (req,res) =>{
    let sql = "INSERT INTO Meetings Values(1, 'Intech International', '10:00', '12:00', 32), (2, 'Sales-Con','10:00', '12:00', 21), (3, 'CyberMeet','09:00', '11:00', 22), (4, 'Earth Space','13:00', '15:00', 11), (5, 'Goference' , '09:00', '11:00', 15)";
    connection.query(sql, (err, result) =>{

        if(err) throw err;
        console.log(result);
        res.send('MeetingsTable is implemented.');
    });
});

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});