import sqlite3
from flask import g
from flask import Flask, render_template
app = Flask(__name__)

DATABASE = 'university.db'

def get_db():
  db = getattr(g, '_database', None)
  if db is None:
    db = g._database = sqlite3.connect(DATABASE)
    db.row_factory = sqlite3.Row
  return db

@app.teardown_appcontext
def close_connection(exception):
  db = getattr(g, '_database', None)
  if db is not None:
     db.close()

def query_db(query, args=(), one=False):
  cur = get_db().execute(query, args)
  rv = cur.fetchall()
  cur.close()
  return (rv[0] if rv else None) if one else rv

@app.route('/')
def index():
  return render_template('home.html')

@app.route('/student/<student_id>')
def show_student_profile(student_id):
  student = query_db('SELECT * FROM STUDENT WHERE student_id = ?', [student_id])
  print(student)
  return student
  # return 'User %s' % student_id

@app.route('/list_students')
def list_students():
  students = query_db('SELECT p.fname, p.lname, p.email, s.student_id FROM PERSON p, STUDENT s WHERE p.tckn = s.tckn')
  return render_template('list_students.html', rows = students)

@app.route('/list_courses')
def list_courses():
  courses = query_db('SELECT * FROM COURSE')
  return render_template('list_courses.html', rows = courses)