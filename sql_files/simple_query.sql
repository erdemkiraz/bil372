-- SQLite
SELECT
	p.fname,
	p.lname,
	p.email,
	s.student_id
FROM
	PERSON p,
	STUDENT s
WHERE
	p.tckn = s.tckn;