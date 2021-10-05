const pool = require('../databases/database');

const get = async (req, res) => {
    const response = await pool.query('SELECT * FROM products ORDER BY  id_product ASC');
    res.status(200).json(response.rows);
};

module.exports = {
     get,
    // getId,
    // save,
    // update,
    // deletes
};
