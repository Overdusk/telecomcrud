const express= require('express');
const bodyParser = require('body-parser');
const port = (process.env.port || 3000);
const apiRouter = require('./routes/api');

//express y bodyparser
const app = express();
require('./sequelize');
//admitir
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//config
app.set('port', port);

//rutas
app.use('/api', apiRouter);

//iniciar express
app.listen(app.get('port'),(error)=>{
	if (error) {
		console.log('error al iniciar servidor');
	}
	else{
		console.log('se ha conectado!!! en puerto: ' + port);
	}
})