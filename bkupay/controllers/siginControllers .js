const pool = require('../databases/database');
const bcrypt = require('bcrypt')
const rounds = 10;


const get = async (req, res) => {
    // const response = await pool.query('SELECT * FROM agents ORDER BY id_agent ASC');
    // res.status(200).json(response.rows);
};

const save = async (req, res) => {
    // const {id_agent,detail, active } = req.body;
    // const response = await pool.query('INSERT INTO agents (detail, active) VALUES ($1, $2)', [detail, active]);

    // res.json({
    //     message: 'User Added successfully',
    //     body: {
    //         user: { id_agent, detail, active }
    //     }
    // })

    const { username, email, password, card } = req.body;
    console.log(username, email, password, card)
  
    const hash = await bcrypt.hash(password, rounds)

    console.log(hash,"+++++++++++++++++++++++");
    console.log(await bcrypt.compare(password, hash))




    // console.log(username, email, password, card)
    res.json({
        message: 'User Added successfully',

    })
};



// const password = 'oe3im3io2r3o2'
// const rounds = 10
// const x =[]

// const hashPassword = async () => {
//     const hash = await bcrypt.hash(password, rounds)
//     console.log(hash)
//     console.log(await bcrypt.compare(password, hash))
//   }

//   hashPassword()





module.exports = {
    get,
    save
};
