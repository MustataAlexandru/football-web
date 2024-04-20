const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

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

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
