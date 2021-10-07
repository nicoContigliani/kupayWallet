const pool = require('../databases/database');


const save = async (req, res) => {
    const {id_agent,detail, active } = req.body;
    const response = await pool.query('INSERT INTO agents (detail, active) VALUES ($1, $2)', [detail, active]);

    res.json({
        message: 'User Added successfully',
        body: {
            user: { id_agent, detail, active }
        }
    })
};


module.exports = {
   save
};
