from flask import Flask, jasonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route("/api/home", methods=["GET"])
def return_home():
    return jasonify({
        'message':"Message",
        'people': ['Jack','Harry','Barry']
    })

if __name__=="__main__":
    app.run(debug= True, port=8080)