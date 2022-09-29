const router = require('express').Router();

const {Product} = require('../../sequelize');

	router.get('/', async (req,res) => {
		const products = await Product.findAll();
		res.json(products);
	})

	router.get('/:productId', async(req,res) =>{
		const product = await Product.findAll({
			where: {id: req.params.productId}
		});
		res.json(product);
	})

	router.post('/', async(req,res)=> {
		const product = await Product.create(req.body);
		res.json(product);
	})

	router.put('/:productId', async (req,res)=>{
		await Product.update(req.body,{
			where: {id: req.params.productId}
		});
		res.json({success: 'se ha modificado'});
	})

	router.delete('/:productId', async(req, res)=>{
		await Product.destroy({
			where: {id: req.params.productId}
		});
		res.json({success:'se ha borrado el producto'});
	});
module.exports = router;