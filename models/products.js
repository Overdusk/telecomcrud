module.exports = (sequelize, type)  => {
	return sequelize.define('Product',{
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: type.STRING,
		serial:type.STRING,
		precio: type.STRING
	})
}