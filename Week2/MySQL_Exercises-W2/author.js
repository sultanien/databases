export const authorsTable = [
  `CREATE TABLE IF NOT EXISTS authors(
        Id INT AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(75), 
        university VARCHAR(75), 
        date_of_birth DATE, 
        h_index SMALLINT, 
        gender ENUM('male', 'female', 'transgender', 'non-binary')
    )`,
];

export const authorsQuery = [
  `ALTER TABLE authors 
    ADD COLUMN mentor INT,
    ADD FOREIGN KEY(mentor) REFERENCES authors(Id);`,
];

