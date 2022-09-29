module.exports = (sequelize, type)  => {
	return sequelize.define('Client',{
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: type.STRING,
		apellido:type.STRING,
		cedula: type.STRING,
		email:type.STRING,
		telefono: type.STRING,
		direccion: type.STRING
	})

}