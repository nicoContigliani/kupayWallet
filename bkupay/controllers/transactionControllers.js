const pool = require('../databases/database');

const get = async (req, res) => {
    const response = await pool.query('SELECT * FROM transactions ORDER BY  id_transaction ASC');
    res.status(200).json(response.rows);
};



const getId = async (req, res) => {
    const id_transaction = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM transactions where id_transaction =' + id_transaction);
    res.status(200).json(response.rows);
};


const save = async (req, res) => {
    const { id_agent, detail, active } = req.body;
    const response = await pool.query('INSERT INTO transactions (description, amount, id_wallet, id_product, id_client) VALUES ($1, $2,$3,$4,$5)', [description, amount, id_wallet, id_product, id_client]);

    res.json({
        message: 'User Added successfully',
        body: {
            transaction: { description, amount, id_wallet, id_product, id_client }
        }
    })
};


const update = async (req, res) => {
    // console.log(req.params);
    // console.log(req.body);
    const id_transaction = parseInt(req.params.id);
    console.log(id_transaction);
     const { description, amount, id_wallet, id_product, id_client } = req.body;
     const response = await pool.query('UPDATE transactions SET description=$1, amount=$2, id_wallet=$3, id_product=$4, id_client=$5 where id_transaction = $6', [
        description, amount, id_wallet, id_product, id_client
         ]);
    res.json(`transaction ${id_transaction} Updated Successfully`);
};







const deletes = async (req, res) => {
    const id_transaction = parseInt(req.params.id);

    await pool.query('DELETE FROM transactions where id_transaction = $1', [
        id_agent
    ]);
    res.json(`transaction ${d_transaction} deleted Successfully`);
};

module.exports = {
    get,
    getId,
    save,
    update,
    deletes
};
