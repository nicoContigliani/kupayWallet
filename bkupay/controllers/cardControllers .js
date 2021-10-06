const pool = require('../databases/database');

const get = async (req, res) => {
    const response = await pool.query('SELECT * FROM cards ORDER BY  id_card ASC');
    res.status(200).json(response.rows);
};

const getId = async (req, res) => {
    const id_card= parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM cards where  id_client =' + id_card);
    res.status(200).json(response.rows);
};



module.exports = {
     get,
     getId,
    // save,
    // update,
    // deletes
};
