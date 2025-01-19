from flask import Flask, request, abort, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from config import ApplicationConfig
from models import db, User
from flask_session import Session
from flask_login import login_required


app = Flask(__name__)
CORS(app)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
server_sessions = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/api/me", methods=["GET"])
def get_current_user():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error" : "Unauthorized"}), 401
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
		"id": user.id,
		"email": user.email
	})
    
@app.route("/api/me", methods=["POST"])
def mosquitos():
    return jsonify({"error" : "You got me"}), 401


@app.route("/api/register", methods=["POST"])
def register_user():
    name = request.json["name"]
    email = request.json["email"]
    password = request.json["password"]
    
    user_exists = User.query.filter_by(email=email).first() is not None
    
    if user_exists:
        return jsonify({"error" : "User already exists"}), 409
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(name=name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({
		"id": new_user.id,
		"name": new_user.name,
		"email": new_user.email
	})
    
@app.route("/api/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]
    
    user = User.query.filter_by(email=email).first()
    
    
    if user is None:
        return jsonify({"error" : "Unauthorized"}), 401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error" : "Unauthorized"}), 401
    
    session["user_id"] = user.id
    
    return jsonify({
		"id": user.id,
		"name": user.name,
		"email": user.email
	})


    return ""

if __name__ == "__main__":
	app.run(debug=True)