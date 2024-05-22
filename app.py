from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

#Configuration de la base de données
db = mysql.connector.connect (
    host="localhost",
    user="root",
    password="Jesusjetesuis",
    database="olympics"
)

#Connexion à la base de données 
@app.route('/api/events', methods=['GET'])
def get_events(): 
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM events")
    events = cursor.fetchall()
    cursor.close()
    return jsonify(events)

if __name__ == '__main__':
    app.run(debug=True)