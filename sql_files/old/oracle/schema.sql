CREATE TABLE PERSON (
  tckn     number(11),
  fname    varchar(15),
  lname    varchar(15),
  gender   char,
  email    varchar(25),
  phone    number(10)
);

CREATE TABLE STUDENT (
  tckn              number(11),
  student_id        number(9),
  entry_year        number(4),
  is_active         number(1),
  is_undergraduate  number(1)
);

CREATE TABLE MAJOR (
  s_tckn      number(11),
  mname       varchar(50),
  mtype       varchar(10)
);

CREATE TABLE COURSE (
  course_id     varchar(7),
  department    varchar(50),
  cname         varchar(50),
  credit        number(3)
);

CREATE TABLE TERM (
  tyear      varchar(10),
  tname      varchar(10),
  tuition    number(6)
);

CREATE TABLE BOOK (
  bname      varchar(50),
  course_id  varchar(7)
);

CREATE TABLE EMPLOYEE (
  tckn        number(11),
  salary      number(10, 2),
  taxnumber   varchar(15)
);

CREATE TABLE STUDENT_ASSISTANT (
  tckn              number(11),
  supervisor_tckn   number(11)
);

CREATE TABLE PROFESSOR (
  tckn          number(11),
  title         varchar(15),
  department    varchar(50)
);

CREATE TABLE STAFF (
  tckn        number(11),
  position    varchar(50)
);

CREATE TABLE TAKES_COURSE (
  s_tckn           number(11),
  course_id        varchar(7),
  midterm_score    number(5, 2),
  final_score      number(5, 2),
  grade            varchar(3)
);

CREATE TABLE ASSISTS (
  sa_tckn     number(11),
  course_id   varchar(7)
);

CREATE TABLE TEACHES (
  prof_tckn    number(11),
  course_id    varchar(7),
  tyear        varchar(10),
  tname        varchar(10)
);

CREATE TABLE PREREQUISITE (
  course_id               varchar(7),
  prerequiste_course_id   varchar(7)
);

CREATE TABLE COMPANY (
  company_id   varchar(20),
  cname        varchar(40),
  address      varchar(80),
  phone        number(11),
  has_bus      number(1)
);

CREATE TABLE CO_OP (
  company_id        varchar(20),
  s_tckn            number(11),
  code              varchar(10),
  supervisor_name   varchar(20),
  supervisor_email  varchar(40)
);

CREATE TABLE LIMITS (
  company_id    varchar(20),
  major_name    varchar(50),
  quota         number(6)
);

ALTER TABLE PERSON
	ADD CONSTRAINT  XPKPERSON PRIMARY KEY (tckn);

ALTER TABLE STUDENT
	ADD CONSTRAINT  XPKSTUDENT PRIMARY KEY (tckn);

ALTER TABLE MAJOR
	ADD CONSTRAINT  XPKMAJOR PRIMARY KEY (s_tckn, mname);

ALTER TABLE COURSE
	ADD CONSTRAINT  XPKCOURSE PRIMARY KEY (course_id);

ALTER TABLE TERM
	ADD CONSTRAINT  XPKTERM PRIMARY KEY (tyear, tname);

ALTER TABLE BOOK
	ADD CONSTRAINT  XPKBOOK PRIMARY KEY (bname);

ALTER TABLE EMPLOYEE
	ADD CONSTRAINT  XPKEMPLOYEE PRIMARY KEY (tckn);

ALTER TABLE STUDENT_ASSISTANT
	ADD CONSTRAINT  XPKSTUDENT_ASSISTANT PRIMARY KEY (tckn);

ALTER TABLE PROFESSOR
	ADD CONSTRAINT  XPKPROFESSOR PRIMARY KEY (tckn);

ALTER TABLE STAFF
	ADD CONSTRAINT  XPKSTAFF PRIMARY KEY (tckn);

ALTER TABLE TAKES_COURSE
	ADD CONSTRAINT  XPKTAKES_COURSE PRIMARY KEY (s_tckn, course_id);

ALTER TABLE ASSISTS
	ADD CONSTRAINT  XPKASSISTS PRIMARY KEY (sa_tckn, course_id);

ALTER TABLE TEACHES
	ADD CONSTRAINT  XPKTEACHES PRIMARY KEY (prof_tckn, course_id, tyear, tname);

ALTER TABLE PREREQUISITE
	ADD CONSTRAINT  XPKPREREQUISITE PRIMARY KEY (course_id, prerequiste_course_id);

ALTER TABLE COMPANY
	ADD CONSTRAINT  XPKCOMPANY PRIMARY KEY (company_id);

ALTER TABLE CO_OP
	ADD CONSTRAINT  XPKCO_OP PRIMARY KEY (company_id, s_tckn);

ALTER TABLE LIMITS
	ADD CONSTRAINT  XPKLIMITS PRIMARY KEY (company_id, major_name);



ALTER TABLE STUDENT 
	ADD (CONSTRAINT  a_student FOREIGN KEY (tckn) REFERENCES PERSON(tckn));

ALTER TABLE EMPLOYEE 
	ADD (CONSTRAINT  an_employee FOREIGN KEY (tckn) REFERENCES PERSON(tckn));

ALTER TABLE STUDENT_ASSISTANT
	ADD (CONSTRAINT  a_student_assistant FOREIGN KEY (tckn) REFERENCES PERSON(tckn));

ALTER TABLE PROFESSOR 
	ADD (CONSTRAINT  a_professor FOREIGN KEY (tckn) REFERENCES PERSON(tckn));

ALTER TABLE STAFF 
	ADD (CONSTRAINT  a_staff FOREIGN KEY (tckn) REFERENCES PERSON(tckn));

ALTER TABLE MAJOR 
	ADD (CONSTRAINT  majoring_in FOREIGN KEY (s_tckn) REFERENCES STUDENT(tckn));

ALTER TABLE TAKES_COURSE 
	ADD (CONSTRAINT  takes FOREIGN KEY (s_tckn) REFERENCES STUDENT(tckn));

ALTER TABLE ASSISTS 
	ADD (CONSTRAINT  r_11 FOREIGN KEY (sa_tckn) REFERENCES STUDENT_ASSISTANT(tckn));

ALTER TABLE TEACHES 
	ADD (CONSTRAINT  r_14 FOREIGN KEY (prof_tckn) REFERENCES PROFESSOR(tckn));

ALTER TABLE CO_OP 
	ADD (CONSTRAINT  goes_to FOREIGN KEY (s_tckn) REFERENCES PERSON(tckn));


ALTER TABLE BOOK 
	ADD (CONSTRAINT  has_book FOREIGN KEY (course_id) REFERENCES COURSE(course_id));

ALTER TABLE TAKES_COURSE 
	ADD (CONSTRAINT  r_12 FOREIGN KEY (course_id) REFERENCES COURSE(course_id));

ALTER TABLE ASSISTS 
	ADD (CONSTRAINT  r_13 FOREIGN KEY (course_id) REFERENCES COURSE(course_id));

ALTER TABLE TEACHES 
	ADD (CONSTRAINT  teaching FOREIGN KEY (course_id) REFERENCES COURSE(course_id));

ALTER TABLE PREREQUISITE 
	ADD (CONSTRAINT  r_15 FOREIGN KEY (course_id) REFERENCES COURSE(course_id));

ALTER TABLE PREREQUISITE 
	ADD (CONSTRAINT  r_16 FOREIGN KEY (prerequiste_course_id) REFERENCES COURSE(course_id));


ALTER TABLE CO_OP 
	ADD (CONSTRAINT  r_17 FOREIGN KEY (company_id) REFERENCES COMPANY(company_id));

ALTER TABLE LIMITS 
	ADD (CONSTRAINT  r_18 FOREIGN KEY (company_id) REFERENCES COMPANY(company_id));


ALTER TABLE TEACHES 
	ADD (CONSTRAINT  r_19 FOREIGN KEY (tyear, tname) REFERENCES TERM(tyear, tname));

ALTER TABLE STUDENT_ASSISTANT
	ADD (CONSTRAINT  supervises FOREIGN KEY (supervisor_tckn) REFERENCES PROFESSOR(tckn));


