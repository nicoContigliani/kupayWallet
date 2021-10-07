const pool = require('../databases/database');
const bcrypt = require('bcrypt')
const rounds = 10;


const get = async (req, res) => {
    // const response = await pool.query('SELECT * FROM agents ORDER BY id_agent ASC');
    // res.status(200).json(response.rows);
};

const save = async (req, res) => {
    const { username, email, password, card } = req.body;

    //primero crea la tarjeta 
    const response = await pool.query('INSERT INTO public.cards (fullname, name_card, expiration, number_card, company_card, passwords_card, limit_card, count_total_card) VALUES ($1, $2,$3,$4,$5,$6,$7,$8)', [fullname=username, name_card="visa", expiration="2025-05-01", number_card=card, company_card="visa", passwords_card="123456789", limit_card=15000, count_total_card=1]);


    //id card hace un get con number_card   
    const getCardId = await pool.query('SELECT * FROM public.cards ORDER BY id_card desc limit 1');
    const id_card = getCardId.rows[0].id_card;

    //crea la billetera 
    const insertwallet = await pool.query('INSERT INTO wallets (name_wallet,passwords_wallet, count_wallet, id_card) VALUES ($1,$2,$3,$4)', [name_wallet="alfa", passwords_wallet="123123", count_wallet=100, id_card]);

    //id de billetera select * from public.wallets w ORDER BY id_wallet desc limit 1;
    const getWalletId = await pool.query('select * from public.wallets w ORDER BY id_wallet desc limit 1');
    const id_wallet = getWalletId.rows[0].id_card;

    //crear clliente 
    const hash = await bcrypt.hash(password, rounds)

    //  console.log(hash,"+++++++++++++++++++++++");
     const insertClient = await pool.query('INSERT INTO public.cards (usernames, email, passwords, id_wallet, lastname) VALUES ($1, $2,$3,$4,$5)', [usernames, email, passwords=hash, id_wallet, lastname=usernames]);




    // const {id_agent,detail, active } = req.body;
 
    // const response = await pool.query('INSERT INTO agents (detail, active) VALUES ($1, $2)', [detail, active]);

    // res.json({
    //     message: 'User Added successfully',
    //     body: {
    //         user: { id_agent, detail, active }
    //     }
    // })

    // const { username, email, password, card } = req.body;
    // console.log(username, email, password, card)

    //  const hash = await bcrypt.hash(password, rounds)

    //  console.log(hash,"+++++++++++++++++++++++");
    // console.log(await bcrypt.compare(password, hash))


    //  const response = await pool.query('INSERT INTO agents (usernames, email, passwords, id_wallet, id_card, lastname) VALUES ($1, $2)', [sername, email, password, card]);


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
