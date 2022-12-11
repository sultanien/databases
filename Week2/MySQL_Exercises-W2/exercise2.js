export const paperTable = [
    `CREATE TABLE IF NOT EXISTS research_papers(
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        conference VARCHAR(255), 
        publish_date DATE
      )`
  ];


export const joinTable = [
    `CREATE TABLE IF NOT EXISTS author_research(
        id INT AUTO_INCREMENT PRIMARY KEY,
        author_id INT,
        paper_id INT,
        FOREIGN KEY(author_id) REFERENCES authors(Id),
        FOREIGN KEY(paper_id) REFERENCES research_papers(Id)
      )`
];

export const authorsData = [
    `INSERT INTO authors(name,university, date_of_birth, h_index,gender,mentor) 
        VALUES
            ("Anil K. Jain", "Michigan State University", "1948-08-05", 201, "male", null),
            ("Dawn Song", "University of California", "1978-08-05", 125, "female", null),
            ("Lale Akarun", "Boğazici University", "1978-08-05", 78, "female", null ),
            ("Marlies Glasius", "University of Amsterdam", "1978-08-05", 112, "female", null),
            ("Philip S. Yu", "University of Illinois", "1948-08-05", 163, "male", null),
            ("Jale Tosun", "Heidelberg University", "1978-08-05", 28, "female", null ),
            ("Suzan Erder", "Heidelberg University", "2000-08-05", 4, "female", 6 ),
            ("Jack Black", "University of California", "1998-08-05", 2,"male", 2 ),
            ("Jane Tiger", "University of Amsterdam", "2000-08-05", 2,"female", 4 ),
            ("Ali Erden", "Boğazici University", "2000-08-05", 1, "male", 3),
            ("Eva Geiger", "Michigan State University", "1978-08-05", 28, "female", 1),
            ("Genia Kostka", "Heidelberg University", "1978-08-05", 12, "female", 8),
            ("Robert Patricia", "Utrecht University", "1998-08-05", 3, "male", 9),
            ("Melodi Dear", "Heidelberg University", "1988-08-05", 5, "female", 11 ),
            ("Thomas Sunstein", "Michigan State University", "1988-08-05", 11,"male", 1 );
`];


export const paperData = [
    `INSERT INTO research_papers( title, conference, publish_date)
        VALUES
            ('Title 1', "Conference 1", "2020-01-01"),
            ('Title 2', "Conference 2", "2020-02-01"),
            ('Title 3', "Conference 3", "2020-03-11"),
            ('Title 4', "Conference 4", "2020-01-21"),
            ('Title 5', "Conference 5", "2020-04-11"),
            ('Title 6', "Conference 6", "2020-05-12"),
            ('Title 7', "Conference 7", "2020-06-13"),
            ('Title 8', "Conference 8", "2020-06-05"),
            ('Title 9', "Conference 9", "2020-06-07"),
            ('Title 10', "Conference 10", "2020-07-08"),
            ('Title 11', "Conference 11", "2020-01-09"),
            ('Title 12', "Conference 12", "2020-02-10"),
            ('Title 13', "Conference 15", "2020-03-11"),
            ('Title 14', "Conference 18", "2020-04-11"),
            ('Title 15', "Conference 21", "2020-05-21"),
            ('Title 16', "Conference 33", "2020-06-30"),
            ('Title 17', "Conference 27", "2020-07-12"),
            ('Title 18', "Conference 41", "2020-08-13"),
            ('Title 19', "Conference 43", "2020-09-16"),
            ('Title 20', "Conference 48", "2020-10-17"),
            ('Title 21', "Conference 52", "2020-11-19"),
            ('Title 22', "Conference 49", "2020-12-01"),
            ('Title 23', "Conference 55", "2020-01-02"),
            ('Title 24', "Conference 57", "2020-02-03"),
            ('Title 25', "Conference 62", "2020-03-04"),
            ('Title 26', "Conference 66", "2020-04-05"),
            ('Title 27', "Conference 70", "2020-05-06"),
            ('Title 28', "Conference 71", "2020-06-07"),
            ('Title 29', "Conference 81", "2020-07-08"),
            ('Title 30', "Conference 73", "2020-08-09");
    `
];

export const junctionTableData = [
    `INSERT INTO author_research( author_id,paper_id)
        VALUES 
        (1,1),
        (1,2),
        (2,3),
        (2,4),
        (3,5),
        (3,6),
        (4,7),
        (4,8),
        (5,9),
        (5,10),
        (6,11),
        (6,12),
        (7,13),
        (7,14),
        (8,15),
        (8,16),
        (9,17),
        (9,18),
        (10,19),
        (10,20),
        (11,21),
        (12,22),
        (12,23),
        (1,24),
        (1,25),
        (14,26),
        (14,27),
        (15,28),
        (15,29),
        (1,29),
        (15,30);
    `
]