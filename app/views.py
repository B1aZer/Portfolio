from flask import render_template, jsonify, abort, request
from app import app, mail
from flask_mail import Message

@app.route('/')
def index_view():
    return render_template('index.html')

@app.route('/mail', methods=['GET', 'POST'])
def send_view():
    result = {'status':True}
    if request.method != 'POST':
        abort(404)
    data = request.get_json()
    form = {}
    for nv in data:
        form[nv['name']] = nv['value']
    msg = Message(
                  form['name'],
               sender=form['email'],
               recipients=
                   ['dmitry.branitskiy@gmail.com'])
    msg.body = form['message']
    try:
        mail.send(msg)
    except:
        result.status = False
    return jsonify(result)
