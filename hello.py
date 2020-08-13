import sqlite3
from flask import g
from flask import Flask, render_template, request, Response, jsonify
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
  students = query_db('SELECT p.fname, p.lname, p.email, s.student_id '
                      'FROM PERSON p, STUDENT s '
                      'WHERE p.tckn = s.tckn')
  return res_to_json(students)

@app.route("/api/taken_courses")
def get_taken_courses():
  courses = query_db(
      'SELECT p.fname, p.lname, s.student_id,c.course_id,c.cname, tc.midterm_score, tc.final_score, tc.grade '
      'FROM PERSON p, STUDENT s, TAKES_COURSE tc, COURSE c '
      'WHERE p.tckn = s.tckn AND tc.s_tckn = p.tckn AND c.course_id = tc.course_id'
  )
  return res_to_json(courses)

@app.route("/api/insert_entity", methods=["POST"])
def insert_entity():
  req = json.loads(request.data)
  req = req["data"]

  print(req)

  try:

    if not req['isUpdate']:

      entity_type = req['entityType']

      if entity_type == 'person':
        res = insert_db(
            'INSERT INTO PERSON '
            'VALUES (?, ?, ?, ?, ?, ?) ', [
                int(req['TCKN']),
                req['name'] or None,
                req['surname'] or None,
                req['gender'] or None,
                req['email'] or None,
                int(req['telno']) if req['telno'] else None
            ])

      elif entity_type == 'student':
        res = insert_db(
            'INSERT INTO STUDENT '
            'VALUES (?, ?, ?, ?, ?) ', [
                int(req['TCKN']),
                int(req['student_id']) if req['student_id'] else None,
                int(req['entry_year']) if req['entry_year'] else None,
                int(req['is_active']),
                int(req['isUnderGraduate'])
            ])

      elif entity_type == 'employee':
        res = insert_db(
            'INSERT INTO EMPLOYEE '
            'VALUES (?, ?, ?) ', [
                int(req['TCKN']),
                float(req['salary']) if req['salary'] else None,
                req['tax_number'] if req['tax_number'] else None
            ])

      elif entity_type == 'professor':
        res = insert_db(
            'INSERT INTO PROFESSOR '
            'VALUES (?, ?, ?) ', [
                int(req['TCKN']),
                req['title'] if req['title'] else None,
                req['department'] if req['department'] else None,
            ])

      elif entity_type == 'company':
        res = insert_db(
            'INSERT INTO COMPANY '
            'VALUES (?, ?, ?, ?, ?) ', [
                req['companyID'],
                req['name'] if req['name'] else None,
                req['address'] if req['address'] else None,
                int(req['telno']) if req['telno'] else None,
                int(req['hasBus']) if req['hasBus'] else None
            ])

      elif entity_type == 'course':
        res = insert_db(
            'INSERT INTO course '
            'VALUES (?, ?, ?, ?) ', [
                req['courseID'],
                req['department'] if req['department'] else None,
                req['name'] if req['name'] else None,
                req['credit'] if req['credit'] else None
            ])

      elif entity_type == 'takes_course':
        res = insert_db(
            'INSERT INTO takes_course '
            'VALUES (?, ?, ?, ?, ?) ', [
                int(req['TCKN']),
                req['courseID'] if req['courseID'] else None,
                float(req['midTerm']) if req['midterm'] else None,
                float(req['final']) if req['final'] else None,
                req['grade'] if req['grade'] else None
            ])

      elif entity_type == 'prerequisite':
        res = insert_db(
            'INSERT INTO prerequisite '
            'VALUES (?, ?) ', [
                req['courseID'],
                req['prerequisiteID'] if req['prerequisiteID'] else None,
            ])

      elif entity_type == 'major':
        res = insert_db(
            'INSERT INTO major '
            'VALUES (?, ?, ?) ', [
                int(req['TCKN']),
                req['name'] if req['name'] else None,
                req['major_type'] if req['major_type'] else None
            ])

      else:
        raise Exception('No proper entity type mentioned')



    else:

      entity_type = req['entityType']

      if entity_type == 'person':
        res = insert_db(
            'UPDATE PERSON '
            'SET tckn = ?, '
            'fname = ?, '
            'lname = ?, '
            'gender = ?, '
            'email = ?, '
            'phone = ? '
            'WHERE tckn = ? ', [
                int(req['TCKN']),
                req['name'] or None,
                req['surname'] or None,
                req['gender'] or None,
                req['email'] or None,
                int(req['telno']) if req['telno'] else None,

                int(req['TCKN'])
            ])

      elif entity_type == 'student':
        res = insert_db(
            'UPDATE STUDENT '
            'SET tckn = ?, '
            'student_id = ?, '
            'entry_year = ?, '
            'is_active = ?, '
            'is_undergraduate = ? '
            'WHERE tckn = ? ', [
                int(req['TCKN']),
                int(req['student_id']) if req['student_id'] else None,
                int(req['entry_year']) if req['entry_year'] else None,
                int(req['is_active']),
                int(req['isUnderGraduate']),

                int(req['TCKN'])
            ])

      elif entity_type == 'employee':
        res = insert_db(
            'UPDATE EMPLOYEE '
            'SET tckn = ?, '
            'salary = ?, '
            'taxnumber = ? '
            'WHERE tckn = ? ', [
                int(req['TCKN']),
                float(req['salary']) if req['salary'] else None,
                req['tax_number'] if req['tax_number'] else None,

                int(req['TCKN'])
            ])

      elif entity_type == 'professor':
        res = insert_db(
            'UPDATE PROFESSOR '
            'SET tckn = ?, '
            'title = ?, '
            'department = ? '
            'WHERE tckn = ? ', [
                int(req['TCKN']),
                req['title'] if req['title'] else None,
                req['department'] if req['department'] else None,

                int(req['TCKN'])
            ])

      elif entity_type == 'company':
        res = insert_db(
            'UPDATE COMPANY '
            'SET company_id = ?, '
            'cname = ?, '
            'address = ? '
            'phone = ?, '
            'has_bus = ? '
            'WHERE company_id = ? ', [
                req['companyID'],
                req['name'] if req['name'] else None,
                req['address'] if req['address'] else None,
                int(req['telno']) if req['telno'] else None,
                int(req['hasBus']) if req['hasBus'] else None,

                req['companyID']
            ])

      elif entity_type == 'course':
        res = insert_db(
            'UPDATE COURSE '
            'SET course_id = ?, '
            'department = ?, '
            'cname = ?, '
            'credit = ? '
            'WHERE course_id = ? ', [
                req['courseID'],
                req['department'] if req['department'] else None,
                req['name'] if req['name'] else None,
                req['credit'] if req['credit'] else None,

                req['courseID']
            ])

      elif entity_type == 'takes_course':
        res = insert_db(
            'UPDATE TAKES_COURSE '
            'SET s_tckn = ?, '
            'course_id = ?, '
            'midterm_score = ?, '
            'final_score = ?, '
            'grade = ? '
            'WHERE s_tckn = ? AND course_id = ?', [
                int(req['TCKN']),
                req['courseID'] if req['courseID'] else None,
                float(req['midTerm']) if req['midterm'] else None,
                float(req['final']) if req['final'] else None,
                req['grade'] if req['grade'] else None,

                int(req['TCKN']),
                req['courseID']
            ])

      elif entity_type == 'prerequisite':
        res = insert_db(
            'UPDATE PREREQUISITE '
            'SET course_id = ?, '
            'prerequiste_course_id = ? '
            'WHERE course_id = ? AND prerequiste_course_id = ?', [
                req['courseID'],
                req['prerequisiteID'],

                req['courseID'],
                req['prerequisiteID']
            ])

      elif entity_type == 'major':
        res = insert_db(
            'UPDATE PREREQUISITE '
            'SET s_tckn = ?, '
            'mname = ?, '
            'mtype = ? '
            'WHERE s_tckn = ? AND mname = ?', [
                int(req['TCKN']),
                req['name'] if req['name'] else None,
                req['major_type'] if req['major_type'] else None,

                int(req['TCKN']),
                req['name']
            ])

      else:
        raise Exception('No proper entity type mentioned')

  except Exception as e:
    return Response(response=json.dumps({'reason': str(e), 'status': 400}), status=400)

  return jsonify(success=True)

@app.route("/api/remove_entity", methods=["POST"])
def remove_entity():
  req = json.loads(request.data)
  req = req["data"]

  print(req)

  try:
    entity_type = req['entityType']

    if entity_type == 'person':
      res = insert_db(
          'DELETE FROM PERSON '
          'WHERE tckn = ? ', [
              int(req['TCKN'])
          ])

    elif entity_type == 'student':
      res = insert_db(
          'DELETE FROM student '
          'WHERE tckn = ? ', [
              int(req['TCKN'])
          ])

    elif entity_type == 'employee':
      res = insert_db(
          'DELETE FROM employee '
          'WHERE tckn = ? ', [
              int(req['TCKN'])
          ])

    elif entity_type == 'professor':
      res = insert_db(
          'DELETE FROM professor '
          'WHERE tckn = ? ', [
              int(req['TCKN'])
          ])

    elif entity_type == 'company':
      res = insert_db(
          'DELETE FROM company '
          'WHERE company_id = ? ', [
              req['companyID']
          ])

    elif entity_type == 'course':
      res = insert_db(
          'DELETE FROM course '
          'WHERE course_id = ? ', [
              req['courseID']
          ])

    elif entity_type == 'takes_course':
      res = insert_db(
          'DELETE FROM takes_course '
          'WHERE s_tckn = ? AND course_id = ?', [
              int(req['TCKN']),
              req['courseID']
          ])

    elif entity_type == 'prerequisite':
      res = insert_db(
          'DELETE FROM prerequisite '
          'WHERE course_id = ? AND prerequiste_course_id = ?', [
              req['courseID'],
              req['prerequisiteID']
          ])

    elif entity_type == 'major':
      res = insert_db(
          'DELETE FROM major '
          'WHERE s_tckn = ? AND mname = ?', [
              int(req['TCKN']),
              req['name']
          ])

    else:
      raise Exception('No proper entity type mentioned')

  except Exception as e:
    return Response(response=json.dumps({'reason': str(e), 'status': 400}), status=400)

  return jsonify(success=True)
