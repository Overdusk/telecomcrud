const Sequelize = require('sequelize');
const ProductModel = require('./models/products');
const ClientModel = require('./models/clients');

const sequelize = new Sequelize('telecomcrud', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


const Product = ProductModel(sequelize, Sequelize);
const Client = ClientModel(sequelize,Sequelize);

Product.belongsToMany(Client, { through: 'ClientProducts' });
Client.belongsToMany(Product, { through: 'ClientProducts' });
sequelize.sync({force:false})
	.then(()=>{
		console.log('tablas sincronizadas')
	});

module.exports ={
	Product,
	Client
}