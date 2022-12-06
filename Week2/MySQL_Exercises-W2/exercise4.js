export const aggregateFunctions = [
  //All research papers and the number of authors that wrote that paper
  `SELECT p.title,COUNT(aR.author_id)
    FROM research_papers AS p
    LEFT OUTER JOIN author_research AS aR
    ON p.Id = aR.paper_id
    GROUP BY p.title;
    `,

  //Sum of the research papers published by all female authors
  `SELECT a.gender, COUNT(aR.paper_id)
        FROM authors AS a
        LEFT OUTER JOIN author_research AS aR
        ON a.Id = aR.author_id
        GROUP BY a.gender
        HAVING gender = "female"`,

  // Average of the h-index of all authors per university
  `SELECT university, AVG(h_index)
    FROM authors
    GROUP BY university;`,

  //Sum of the research papers of the authors per university.

  `SELECT university, COUNT(aR.paper_id) AS Papers_Per_Uni
    FROM authors AS a
    LEFT OUTER JOIN author_research AS aR
    ON a.Id = aR.author_id
    GROUP BY university;
    `,
  //Minimum and maximum of the h-index of all authors per university.
  `SELECT university, MIN(h_index), MAX(h_index)
 FROM authors
 GROUP BY university`,
];
