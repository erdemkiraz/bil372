-- ogrencilerin aldigi dersleri listele
SELECT p.fname, p.lname, co.cname
FROM person p, student s, course co, takes_course t
WHERE p.tckn = s.tckn AND s.tckn = t.s_tckn AND t.course_id = co.course_id;

-- supervisor'lik yapan hocalari listele
SELECT p.fname, p.lname
FROM student_assistant s, professor prof, person p
WHERE p.tckn = prof.tckn AND s.supervisor_tckn = prof.tckn;

-- mezun olan ogrenciler
SELECT p.fname, p.lname
FROM person p, student s
WHERE p.tckn = s.tckn AND s.is_active = 0;