from flask import Flask, jsonify

app = Flask(__name__)

payments = [
    {"id": 1, "status": "completed"},
    {"id": 2, "status": "pending"}
]

@app.route("/payments")
def get_payments():
    return jsonify(payments)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3002)
