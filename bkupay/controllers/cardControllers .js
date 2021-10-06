const pool = require('../databases/database');

const get = async (req, res) => {
    const response = await pool.query('SELECT * FROM cards ORDER BY  id_card ASC');
    res.status(200).json(response.rows);
};

const getId = async (req, res) => {
    const id_card= parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM cards where  id_card =' + id_card);
    res.status(200).json(response.rows);
};


const save = async (req, res) => {
    const {id_client,detail, active } = req.body;
    const response = await pool.query('INSERT INTO cards (fullname, name_card, expiration, number_card, company_card, passwords_card, limit_card, count_total_card) VALUES ($1, $2,$3,$4,$5,$6,$7,$8)', [fullname, name_card, expiration, number_card, company_card, passwords_card, limit_card, count_total_card]);

    res.json({
        message: 'Card Added successfully',
        body: {
            card: { fullname, name_card, expiration, number_card, company_card, passwords_card, limit_card, count_total_card }
        }
    })
};


const update = async (req, res) => {
    // console.log(req.params);
    // console.log(req.body);
    const id_card = parseInt(req.params.id);
    console.log(id_card);
     const { fullname, name_card, expiration, number_card, company_card, passwords_card, limit_card, count_total_card  } = req.body;
     const response = await pool.query('UPDATE cards SET fullname=$1, name_card=$2, expiration=$3, number_card=$4, company_card=$5, passwords_card=$6, limit_card=$7, count_total_card=$8  where id_card = $9', [
        fullname, name_card, expiration, number_card, company_card, passwords_card, limit_card, count_total_card,id_card 
         ]);
    res.json(`card ${id_card} Updated Successfully`);
};

const deletes = async (req, res) => {
    const id_card = parseInt(req.params.id);

    await pool.query('DELETE FROM cards where id_card = $1', [
        id_card
    ]);
    res.json(`Card ${id_card} deleted Successfully`);
};


module.exports = {
     get,
     getId,
     save,
     update,
     deletes
};
