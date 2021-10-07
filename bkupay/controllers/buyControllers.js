const pool = require('../databases/database');


//traer los datos de usuario, billetera y card


// quiere comprar credito  por lo que verifica el saldo en card y agrega en billetera y descuenta del credito de card  


//

















const get = async (req, res) => {
    const response = await pool.query('SELECT * FROM clients ORDER BY  id_client ASC');
    res.status(200).json(response.rows);
};

const getId = async (req, res) => {
    const id_client = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM clients where  id_client =' + id_client);
    res.status(200).json(response.rows);
};


const save = async (req, res) => {
    const { id_client, detail, active } = req.body;
    const response = await pool.query('INSERT INTO clients (username, email, passwords, id_wallet, id_card, lastname) VALUES ($1, $2,$3,$4,$5,$6)', [username, email, passwords, id_wallet, id_card, lastname]);

    res.json({
        message: 'User Added successfully',
        body: {
            user: { username, email, passwords, id_wallet, id_card, lastname }
        }
    })
};


const update = async (req, res) => {
    // console.log(req.params);
    // console.log(req.body);
    const id_client = parseInt(req.params.id);
    console.log(id_client);
    const { username, email, passwords, id_wallet, id_card, lastname } = req.body;
    const response = await pool.query('UPDATE clients SET username=$1, email=$2, passwords=$3, id_wallet=$4, id_card=$5, lastname=$6 where id_client = $7 ', [
        username, email, passwords, id_wallet, id_card, lastname,id_client
    ]);
    res.json(`User ${id_client} Updated Successfully`);
};




const deletes = async (req, res) => {
    const id_client = parseInt(req.params.id);

    await pool.query('DELETE FROM clients where  id_client = $1', [
        id
    ]);
    res.json(`User ${id_client} deleted Successfully`);
};

module.exports = {
    get,
    getId,
    save,
    update,
    deletes
};
