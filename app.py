from flask import Flask, render_template,request,redirect,url_for

app = Flask(__name__)
users = [  ] 
@app.route('/')
def home(): 
    return render_template("Home.html",)

    

@app.route('/dashboard')
def index():
    return render_template('User_dashboard.html', users=users)

@app.route('/add_user', methods=['POST'])
def add_user():
    
    user_id = request.form.get('id')
    name = request.form.get('name')
    city = request.form.get('city')
    clg = request.form.get('clg')
    
    users.append({"id": user_id, "name": name, "city": city, "clg": clg})
    
    return redirect(url_for('index'))

@app.route('/edit_user', methods=['POST'])
def edit_user():
    
    user_id = request.form.get('id')
    name = request.form.get('name')
    city = request.form.get('city')
    clg = request.form.get('clg')

    
    user = next((u for u in users if u['id'] == user_id), None)
    
    if user:
        user['name'] = name
        user['city'] = city
        user['clg'] = clg
    
    return redirect(url_for('index'))

@app.route('/delete_user', methods=['POST'])
def delete_user():
    
    user_id = request.form.get('id')

    
    global users
    users = [user for user in users if user['id'] != user_id]
    
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)