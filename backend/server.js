const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");  // Allow any domain
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sport'
});

db.connect(error => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log("Successfully connected to the database.");
});


app.get('/echipe', (req, res) => {
    const sql = `
        SELECT 
            t.id AS teamId, 
            t.nume AS teamName, 
            t.manager, 
            t.administrator, 
            t.antrenor,
            t.description,
            p.p_id AS playerId, 
            p.p_name AS playerName
        FROM 
            teams t
        LEFT JOIN 
            players p ON t.id = p.p_team_id;
    `;
    db.query(sql, (err, results) => {
        
        if (err) {
            console.error('Error fetching teams with players:', err);
            res.status(500).json({ error: err.message });
            return;
        }
        const teams = results.reduce((acc, item) => {
            if (!acc[item.teamId]) {
                acc[item.teamId] = {
                    id: item.teamId,
                    name: item.teamName,
                    manager: item.manager,
                   
                    administrator: item.administrator,
                    coach: item.antrenor,
                    description: item.description,
                    players: []
                };
            }
            if (item.playerId) {
                acc[item.teamId].players.push({
                    id: item.playerId,
                    name: item.playerName
                });
            }
            return acc;
        }, {});
        res.json(Object.values(teams));
    });
});

app.post('/echipe/add', (req, res) => {
    const { teamId, playerName } = req.body;
    const sql = "INSERT INTO players (p_team_id, p_name) VALUES (?, ?)";
    db.query(sql, [teamId, playerName], (err, result) => {
        if (err) {
            console.error('Error adding player:', err);
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: "Player added successfully" });
    });
});

app.post('/echipe/new', (req, res) => {
    
    const { nume, manager, administrator, antrenor, description  } = req.body;
    const sql = "INSERT INTO teams (nume, manager, administrator, antrenor, description) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [nume, manager, administrator, antrenor, description ], (err, result) => {
        if (err) {
            console.error('Error adding team:', err);
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ message: "Team added successfully" });
    });
});

app.post('/users/new', (req, res) => {
    const { email, username, password } = req.body;
    const sql = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)";
    console.log(email, username, password);
    // const hashedPassword = bcrypt.hash(password , genSalt);
    db.query(sql, [email, username, password], (err) => {
        if (err) {
            console.error('Error adding user', err);
            res.status(500).json({
                error: 'Failed to add user',
                message: err.message
            });
            return;
        }
        res.status(201).json({
            message: 'USER ADDED SUCCESSFULLY'
        });
    });
});

app.post('/users/login', (request, response) => {
    const { username, password } = request.body;
    const sql = `SELECT * FROM users WHERE username = ?`;
    db.query(sql, [username], async (error, results) => {
        if (error) {
            console.error(err);
            response.status(500).json({
                error: 'Database error',
                message: err.message
            });
            return;
        }
        if (results.length > 0) {
            comparisonResult = true;
            if (comparisonResult) {
                response.status(200).json({
                    message: 'Logged in successfully',
                    user: results[0]
                });
            } else {
                response.status(401).json({ message: 'Password is incorrect' });
            }
        } else {
            response.status(404).json({ message: 'Username does not exist' });
        }
    });
});

app.post('/announces/new' , (request , response)=> {
    const {title , created_by , content} = request.body;
    console.log(title.trim() , created_by.trim() , content.trim());
    console.log(request.body);
    const sql = "INSERT INTO announces (title , created_by , content) VALUES (? , ? , ?)"
    db.query(sql , [title , created_by , content] , (error) => {
        if(error) {
             console.error(error)
            response.status(500).json({
                error: error,
                message: error.message
            })
             return
            } else {
                response.status(201).json(
                    {message: "succesfully added!"}
                )
            }
    })
})

app.get('/announces', (request, response) => {
    const sql = `SELECT * FROM announces ORDER BY id DESC`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return response.status(500).json({ error: 'Internal server error' });
        }
        console.log('Database results:', results);
        response.json(results);
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
