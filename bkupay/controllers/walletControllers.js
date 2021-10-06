const pool = require('../databases/database');

const get = async (req, res) => {
    const response = await pool.query('SELECT * FROM wallets ORDER BY  id_wallet ASC');
    res.status(200).json(response.rows);
};

const getId = async (req, res) => {
    const id_wallet = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM wallets where id_wallet =' + id_waññet);
    res.status(200).json(response.rows);
};


const save = async (req, res) => {
    const { id_agent, detail, active } = req.body;
    const response = await pool.query('INSERT INTO agents (name_wallet, passwords_card, count_wallet) VALUES ($1, $2,$3)', [name_wallet, passwords_card, count_wallet]);

    res.json({
        message: 'wallet Added successfully',
        body: {
            wallet: { name_wallet, passwords_card, count_wallet }
        }
    })
};

const deletes = async (req, res) => {
    const id_wallet = parseInt(req.params.id);

    await pool.query('DELETE FROM wallets where id_wallet = $1', [
        id_wallet
    ]);
    res.json(`Wallet ${id_wallet} deleted Successfully`);
};


const update = async (req, res) => {
    // console.log(req.params);
    // console.log(req.body);
    const id_wallet = parseInt(req.params.id);
    console.log(id_wallet);
    const { name_wallet, passwords_card, count_wallet } = req.body;
    const response = await pool.query('UPDATE agents SET name_wallet=$1, passwords_card=$2, count_wallet=$3 where id_wallet = $4', [
        name_wallet, passwords_card, count_wallet, id_wallet
    ]);
    res.json(`wallet ${id_wallet} Updated Successfully`);
};





module.exports = {
    get,
    getId,
    save,
    update,
    deletes
};
