const pool = require('../databases/database');

const get = async (req, res) => {
    const response = await pool.query('SELECT * FROM cards ORDER BY  id_card ASC');
    res.status(200).json(response.rows);
};

const getId = async (req, res) => {
    const id_agent= parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM clients where  id_client =' + id_client);
    res.status(200).json(response.rows);
};



module.exports = {
     get,
    // getId,
    // save,
    // update,
    // deletes
};
