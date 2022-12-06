export const sql = [
  //names of all authors and their corresponding mentors
  `SELECT t1.name as author_name, t2.name as mentor_name
   FROM authors t1
   LEFT JOIN authors t2
   ON t1.mentor = t2.id`,

  //authors and their published paper_title
  `SELECT authors.Id, name, university, date_of_birth, h_index, gender, mentor, title 
    FROM authors
    LEFT OUTER JOIN author_research AS a
    ON authors.Id = a.author_id
    LEFT OUTER JOIN research_papers AS p
    ON p.Id = a.paper_id`,
];
