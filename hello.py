import sqlite3
from flask import g
from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

DATABASE = "university.db"

def get_db():
  db = getattr(g, "_database", None)
  if db is None:
    db = g._database = sqlite3.connect(DATABASE)
    db.row_factory = sqlite3.Row
  return db

@app.teardown_appcontext
def close_connection(exception):
  db = getattr(g, "_database", None)
  if db is not None:
    db.close()

def query_db(query, args=(), one=False):
  cur = get_db().execute(query, args)
  rv = cur.fetchall()
  cur.close()
  return (rv[0] if rv else None) if one else rv

def insert_db(query, args=()):
  cur = get_db().execute(query, args)
  get_db().commit()
  cur.close()

# converts the received response from the sql query to JSON
def res_to_json(res):
  res_dict = [dict(row) for row in res]
  return jsonify(res_dict)

#######################################################

@app.route("/api/list_courses")
def list_courses_api():
  courses = query_db('SELECT * FROM COURSE')
  return res_to_json(courses)

@app.route("/api/list_students")
def list_students_api():
  students = query_db('SELECT p.fname, p.lname, p.email, s.student_id FROM PERSON p, STUDENT s WHERE p.tckn = s.tckn')
  return res_to_json(students)

# TODO use the real data directed by form for inserting to db
@app.route("/api/insert_entity", methods=["POST"])
def insert_entity():
  mocked_isperson = 0  #
  mocked_isstudent = 0  #
  mocked_isemployee = 0  #
  mocked_isprofessor = 1  #

  req = json.loads(request.data)
  print(req)

  try:
    if mocked_isperson == 1:
      res = insert_db(
        'INSERT INTO PERSON (tckn, fname)' +
        'VALUES (?, ?)', [req['tckn'], req['fname']]
      )
    elif mocked_isstudent == 1:
      res = insert_db(
        'INSERT INTO STUDENT (tckn, student_id)' +
        'VALUES (?, ?)', [req['tckn'], req['student_id']]
      )
    elif mocked_isemployee == 1:
      res = insert_db(
        'INSERT INTO EMPLOYEE (tckn, salary)' +
        'VALUES (?, ?)', [req['tckn'], req['salary']]
      )
    elif mocked_isprofessor == 1:
      res = insert_db(
        'INSERT INTO PROFESSOR (tckn, title)' +
        'VALUES (?, ?)', [req['tckn'], req['title']]
      )
  except Exception as e:
    return str(e), 500

  return jsonify(success=True)

def insert_person(TCKN, name, surname, adress, gender, email, telno):
  print("insert person", TCKN, name, surname, adress, gender, email, telno)

def insert_student(TCKN, student_id, entry_year, is_active, isUnderGraduate,
                   scolarship):
  print("insert student")

def insert_employee(TCKN, Salary, TaxNumber):
  print("insert employee")

def insert_prof(TCKN, title, department):
  print("insert prf")

def insert_company(companyID, name, adress, telephone, hasBus):
  print("insert company")
