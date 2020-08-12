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


# TODO use the real data directed by form for inserting to db
# TODO : insertion data contains isUpdate flag, if it is true need to be updated instead of adding
@app.route("/api/insert_entity", methods=["POST"])
def insert_entity():
    req = json.loads(request.data)
    req = req["data"]
    print(req)
    # entity_number = req["entityNumber"] ##uncomment if you want to add data to db,
    #
    entity_number = -1

    print("ENTITY ", entity_number
          )  # 0 person, 1 student, 2 employee, 3 professor, 4 company, 5 course,
    # 6 takesCourse, 7 Prequisite, 8 major
    response = {"status": 200}

    # TODO : entity number comes from frontend with bunch of data , need to be added to on on backend. req contains all data.

    try:
        if entity_number == 0:
            res = insert_db('INSERT INTO PERSON (tckn, fname)' + 'VALUES (?, ?)',
                            [req['tckn'], req['fname']])
        elif entity_number == 1:
            res = insert_db(
                'INSERT INTO STUDENT (tckn, student_id)' + 'VALUES (?, ?)',
                [req['tckn'], req['student_id']])
        elif entity_number == 2:
            res = insert_db('INSERT INTO EMPLOYEE (tckn, salary)' + 'VALUES (?, ?)',
                            [req['tckn'], req['salary']])
        elif entity_number == 3:
            res = insert_db('INSERT INTO PROFESSOR (tckn, title)' + 'VALUES (?, ?)',
                            [req['tckn'], req['title']])

        # TODO: need to add other 5 entities
    except Exception as e:
        response["status"] = 500
        return json.dumps(response)

    # return jsonify(success=True)

    return json.dumps(response)  # SEND 200 FOR SUCCESS, REST IS ERROR


@app.route("/api/remove_entity", methods=["POST"])
def remove_entity(): ##TODO : remove entities by their entity number (same numbers with insertion), return not 200 if error
    req = json.loads(request.data)
    req = req["data"]
    print(req)
    print()
    response = {"status": 200}
    return json.dumps(response)


def insert_person(TCKN, name, surname, adress, gender, email, telno):
    print("insert person", TCKN, name, surname, adress, gender, email, telno)


def insert_student(TCKN, student_id, entry_year, is_active, isUnderGraduate,
                   scolarship):
    print("insert student")


def insert_employee(TCKN, Salary, TaxNumber):
    print("insert employee")


def insert_prof(TCKN, title, department):
    print("insert prf")


def insert_company(companyID, name, adress, telno, hasBus):
    print("insert company")
