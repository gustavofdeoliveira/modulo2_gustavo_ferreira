const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

const port = 3061;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'dbCurriculo.db';

app.use(express.static("../frontend/"));

app.use(express.json());


/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos infos 
app.get('/getDados', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TB_CONTATO';
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}

		res.json(rows);

	});
	db.close(); // Fecha o banco
});

app.post('/insertLinguagem', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO TB_LINGUAGENS (name) VALUES ('" + req.body.name + "')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

// Retorna todos linguagens
app.get('/getLinguagens', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); //

	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM TB_LINGUAGENS';
	db.all(sql, [], (err, rows) => {
		if (err) {
			throw err;
		}

		res.json(rows);

	});
	db.close(); // Fecha o banco
});

// app.get("/bem", function(req,res){

// })
app.post('/deleteLinguagem', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM TB_LINGUAGENS WHERE id = " + req.body.id;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.post('/updateLinguagem', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	//res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE TB_LINGUAGENS SET name = '" + req.body.name + "' WHERE id = " + req.body.id;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [], err => {
		if (err) {
			throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});



/* Inicia o servidor */
app.listen(port, hostname, () => {
	console.log(`BD server running at http://${hostname}:${port}/`);
});