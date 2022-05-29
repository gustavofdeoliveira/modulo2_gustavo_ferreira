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

// Retorna todos registros 
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





/* Inicia o servidor */
app.listen(port, hostname, () => {
	console.log(`BD server running at http://${hostname}:${port}/`);
});