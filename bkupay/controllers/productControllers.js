const pool = require('../databases/database');

const get = async (req, res) => {
    const response = await pool.query('SELECT * FROM products ORDER BY  id_product ASC');
    res.status(200).json(response.rows);
};

const getId = async (req, res) => {
    const id_product= parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM  products where id_product =' + id_product);
    res.status(200).json(response.rows);
};


const save = async (req, res) => {
    const {name_product, cost_product, stock } = req.body;
    const response = await pool.query('INSERT INTO products (name_product, cost_product, stock) VALUES ($1, $2,$3)', [name_product, cost_product, stock]);

    res.json({
        message: 'Card Added successfully',
        body: {
            card: { name_product, cost_product, stock }
        }
    })
};


const deletes = async (req, res) => {
    const id_product= parseInt(req.params.id);

    await pool.query('DELETE FROM products where id_product = $1', [
        id_product
    ]);
    res.json(`Product ${id_product} deleted Successfully`);
};

const update = async (req, res) => {
    // console.log(req.params);
    // console.log(req.body);
    const id_product = parseInt(req.params.id);
    console.log(id_product);
     const {  name_product, cost_product, stock } = req.body;
     const response = await pool.query('UPDATE agents SET  name_product=$1, cost_product=$2, stock=$3 where id_product = $4', [
        name_product, cost_product, stock,id_product
         ]);
    res.json(`Product ${id_product} Updated Successfully`);
};




module.exports = {
     get,
     getId,
     save,
     update,
     deletes
};
