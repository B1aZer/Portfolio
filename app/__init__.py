from flask import Flask, url_for
from flask_mail import Mail
import os

app = Flask(__name__)
mail=Mail(app)

# Determines the destination of the build. Only usefull if you're using Frozen-Flask
app.config['FREEZER_DESTINATION'] = os.path.dirname(os.path.abspath(__file__))+'/../build'

app.config['EMAIL_SEND_TO'] = 'yaltawebstudio@gmail.com'

app.config.update(
	DEBUG=True,
	#EMAIL SETTINGS
	MAIL_SERVER='smtp.gmail.com',
	MAIL_PORT=465,
	MAIL_USE_SSL=True,
	MAIL_USERNAME = 'blaze.imba@gmail.com',
	MAIL_PASSWORD = 'qwe123asd123'
	)

mail=Mail(app)

# Function to easily find your assets
# In your template use <link rel=stylesheet href="{{ static('filename') }}">
app.jinja_env.globals['static'] = (
    lambda filename: url_for('static', filename = filename)
)

from app import views
