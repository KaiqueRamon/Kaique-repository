
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3051;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'dbUser.db';
app.use(express.static("../frontend/"));
app.use(express.json());
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/users', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');

  var db = new sqlite3.Database(DBPATH);
var sql = 'SELECT * FROM tbUser ORDER BY title COLLATE NOCASE';
  db.all(sql, [],  (err, rows ) => {
      if (err) {
          throw err;
      }
      res.json(rows);
  });
  db.close();
});


app.post('/userinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); 

  sql = "INSERT INTO tbUser (title, id, completed) VALUES ('" + req.body.title + "', 33, false)";
  var db = new sqlite3.Database(DBPATH); 
  db.run(sql, [],  err => {
      if (err) {
          throw err;
      }
  });
  db.close();
  res.end();
});
No seu terminal, navegue até o subdiretório backend do seu diretório desta etapa e execute node app_52.js.

Abra o Postman, digite o endereço do endpoint users criado (http://127.0.0.1:3052/users) na barra de texto com a mensagem placeholder "Enter request URL" e observe no painel inferior (Aba "Body") a resposta:

[
  {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": 0
  },
  {
      "userId": 2,
      "id": 2,
      "title": "Fabiano Junior",
      "completed": 1
  }
]