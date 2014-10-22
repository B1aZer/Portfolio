from flask import render_template, jsonify, abort, request
from app import app, mail
from flask_mail import Message

@app.route('/')
def index_view():
    return render_template('index.html')

@app.route('/api/mail/', methods=['GET', 'POST'])
def send_view():
    result = {'status':True}
    if request.method != 'POST':
        abort(404)
    data = request.get_json()
    form = {}
    for nv in data:
        form[nv['name']] = nv['value']
    subj = form.get('name') + ' ' + form.get('tel') + ' ' + form.get('email')
    recipients = [app.config['EMAIL_SEND_TO']]
    sender = form.get('email') or app.config['EMAIL_SEND_TO']
    msg = Message( subj, sender=sender, recipients=recipients)
    msg.body = form.get('message')
    try:
        mail.send(msg)
    except:
        result['status'] = False
    return jsonify(result)
