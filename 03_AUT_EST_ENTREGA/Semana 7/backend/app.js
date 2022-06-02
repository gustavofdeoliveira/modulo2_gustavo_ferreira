const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

const port = 3071;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'dbCurriculo.db';

app.use(express.static("../frontend/"));

app.use(express.json());

/****** CRUD ******/

// Retorna todos infos 
app.get('/getDados', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); 
	var sql = 'SELECT * FROM TB_CONTATO';
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}

		res.json(rows);

	});
	db.close();
});

//Metodo Insert da linguagem
app.post('/insertLinguagem', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 

	sql = "INSERT INTO TB_LINGUAGENS (name) VALUES ('" + req.body.name + "')";
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
	});
	db.close();
	res.end();
});

//Metodo get - Retorna todos linguagens
app.get('/getLinguagens', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH);
	var sql = 'SELECT * FROM TB_LINGUAGENS';
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}

		res.json(rows);

	});
	db.close();
});

//Metodo delete da linguagem
app.post('/deleteLinguagem', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	sql = "DELETE FROM TB_LINGUAGENS WHERE id = " + req.body.id;
	var db = new sqlite3.Database(DBPATH);
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close();
});

//Metodo update da linguagem
app.post('/updateLinguagem', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE TB_LINGUAGENS SET name = '" + req.body.name + "' WHERE id = " + req.body.id;
	var db = new sqlite3.Database(DBPATH); 
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close();
});



/* Inicia o servidor */
app.listen(port, hostname, () => {
	console.log(`BD server running at http://${hostname}:${port}/`);
});