const router = require('express').Router();

const {Client} = require('../../sequelize');

	router.get('/', async (req,res) => {
		const client = await Client.findAll();
		res.json(client);
	})

	router.get('/:clientId', async(req,res) =>{
		const client = await Client.findAll({
			where: {id: req.params.clientId}
		});
		res.json(client);
	})

	router.post('/', async(req,res)=> {
		const client = await Client.create(req.body);
		res.json(client);
	})

	router.put('/:clientId', async (req,res)=>{
		await Client.update(req.body,{
			where: {id: req.params.clientId}
		});
		res.json({success: 'se ha modificado'});
	})

	router.delete('/:clientId', async(req, res)=>{
		await Client.destroy({
			where: {id: req.params.clientId}
		});
		res.json({success:'se ha borrado el producto'});
	});
module.exports = router;