import sqlite3
from flask import g
from flask import Flask, render_template,request
import json

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
    return render_template('list_students.html', rows=students)


@app.route('/list_courses')
def list_courses():
    courses = query_db('SELECT * FROM COURSE')
    return render_template('list_courses.html', rows=courses)


@app.route('/api/courses_list')
def list_courses_api():
    # courses = json()
    course = {"courses": [
        {
            "course_id": "BIL113",
            "cname": "Bilgisayar Programlama I",
            "department": "Bilgisayar Muhendisligi",
            "credit": 4},
        {
            "course_id": "BIL211",
            "cname": "Bilgisayar Programlama II",
            "department": "Bilgisayar Muhendisligi",
            "credit": 4
        }
    ]
    }

    courses = json.dumps(course)
    print("list coursess")
    return courses  # TODO: need to return courses as a json object, so react can handle it.


@app.route('/api/students_list')
def list_students_api():
    # students = query_db('SELECT p.fname, p.lname, p.email, s.student_id FROM PERSON p, STUDENT s WHERE p.tckn = s.tckn')
    students = {"students": [
        {"student_id": "161101055",
         "fname": "Ayberk",
         "email": "ayberkuslu@gmail.com"
         },
        {"student_id": "161101056",
         "fname": "Husnu",
         "email": "husnucoban@gmail.com"
         }
    ]
    }
    students = json.dumps(students)
    return students


@app.route('/api/insert_entity', methods=['GET', 'POST'])
def insert_entity():
    print(request.data)
    print("insert entity")
    response = {"response": {
        "status": "200"
    }
    }
    response = json.dumps(response)
    print(response)
    mocked_isperson = 1 #
    mocked_isstudent = 0 #
    mocked_isemployee = 0 #
    mocked_isprofessor = 0 #
    if mocked_isperson == 1:
        # insert_person()
        print("insert person with proper parameters")
    if mocked_isstudent == 1:
        # insert_student()
        print("insert student with proper parameters")


    return response


def insert_person(TCKN, name, surname, adress, gender, email, telno):
    print("insert person", TCKN, name, surname, adress, gender, email, telno)


def insert_student(TCKN, student_id, entry_year, is_active, isUnderGraduate, scolarship):
    print("insert student")


def insert_employee(TCKN, Salary, TaxNumber):
    print("insert employee")


def insert_prof(TCKN, title, department):
    print("insert prf")


def insert_company(companyID, name, adress, telephone, hasBus):
    print("insert company")