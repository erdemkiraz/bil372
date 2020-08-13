-- Ogrencinin aldigi dersler ve ders kitapları
SELECT p.fname, p.lname, co.cname,b.bname
FROM person p, student s, course co, takes_course t,book b
WHERE p.tckn = s.tckn AND s.tckn = t.s_tckn AND t.course_id = co.course_id AND b.course_id = co.course_id AND p.fname = 'Metin';

--BIL372 dersini alan ogrencilerin ve asistanların mail adresleri
SELECT p.email FROM person p,student s,course c, takes_course tc 
WHERE tc.course_id = c.course_id AND p.tckn = s.tckn AND tc.s_tckn= s.tckn AND c.course_id = 'BIL372'
UNION
SELECT p.email FROM person p, assists a WHERE p.tckn = a.sa_tckn AND a.course_id = 'BIL372';


-- BIL372 dersini alan yan dal ogrencileri
SELECT c.course_id,c.cname,p.fname,p.lname,m.mtype FROM person p,student s,course c, takes_course tc,major m 
WHERE tc.course_id = c.course_id AND p.tckn = s.tckn AND tc.s_tckn= s.tckn AND m.s_tckn= s.tckn AND m.mtype = 'Yandal'  AND c.course_id = 'BIL372';


