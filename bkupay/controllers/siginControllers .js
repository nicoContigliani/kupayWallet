const pool = require('../databases/database');
const bcrypt = require('bcrypt')
const rounds = 10;


const get = async (req, res) => {


    // const getClientFind = await pool.query('SELECT * FROM public.clients ORDER BY id_client desc ');
    // const x = getClientFind.rows;

    // const exist = x.find(item => (item.username === usernames))
    // if (exist.username === usernames) {
    //     messages.push("son iguales")
    // } else {
    //     console.log("no son iguales")
    //     console.log(usernames)

    // }

    // select * from clients c where email ='nico.contigliani@gmail.com' OR username ='martin' or id_client=1;

    // const response = await pool.query('SELECT * FROM agents ORDER BY id_agent ASC');
    // res.status(200).json(response.rows);
};

const getClient = async (req, res) => {
    const { usernames, email, password, card } = req.body;
    const messages = [];
    const resp = [];
    const body = []

    console.log(usernames, email, password)

    const responsess = await pool.query(` select * from clients c where email ='${email}' OR username ='${usernames}' `);
    const x = responsess.rows;

    const exist = x.find(item => (item.username === usernames || item.email === email))
    // console.log(exist)
    // console.log([exist].length)



    //  (exist.username === usernames || item.email === email) 
    //  ([exist].length !==0 ) 
    if (exist !== undefined || exist !== undefined) {

        // console.log(exist.passwords)
        const passwords = exist.passwords;
        const respuesta = await bcrypt.compare(password, passwords)
        messages.push("Password true")
        console.log(respuesta)
        resp.push({ respuesta })


        if (respuesta === false) {
            resp.push(false)
            messages.push("Password incorrecto")

        } else {
            const info = await pool.query(`select * from clients c inner join wallets w on c.id_wallet = w.id_wallet inner join cards c2 on w.id_card = c2.id_card inner join transactions t on w.id_wallet = t.id_wallet inner join products p on t.id_product = p.id_product where username='${usernames}' or email='${email}'`);
            const data = info.rows;
            body.push(data)
        }


    } else {
        // console.log("no son iguales")
        // console.log(usernames)
        resp.push(false)
        messages.push("Cliente no encontrado")

    }

    // res.status(200).json(responsess.rows)


    res.json({
        messages,
        resp,
        body
    })
};


///////////////////////////////////////////////
const save = async (req, res) => {


    //{"usernames":"belen", "email":"belen@gmail.com", "password":"123456789", "card":"111111111"}

    const messages = []
    const resp = [];
    const body = [];

    const { usernames, email, password, card } = req.body;
    const datos = [usernames, email, password, card];


    console.log(req.body)




    const responsess = await pool.query(` select * from clients c where email ='${email}' OR username ='${usernames}' `);
    const s = responsess.rows;
    console.log(s.length)

    if (s.length > 0) {

        console.log("existe")
        messages.push("El usuario existe")
    } else {

        console.log("no existe")
        const id_cardA = [];
        const id_walletA = [];
        const id_clientA = [];
        const usernameA = [];
        const emailA = []




        try {
            //primero crea la tarjeta 
            const response = await pool.query('INSERT INTO public.cards (fullname, name_card, expiration, number_card, company_card, passwords_card, limit_card, count_total_card) VALUES ($1, $2,$3,$4,$5,$6,$7,$8)', [fullname = "algo", name_card = "visa", expiration = "2025-05-01", number_card = card, company_card = "visa", passwords_card = "123456789", limit_card = 15000, count_total_card = 1]);

        } catch (error) {
            console.log(error)
        }
        try {
            //id card hace un get con number_card   
            const getCardId = await pool.query('SELECT * FROM public.cards ORDER BY id_card desc limit 1');
            const id_card = getCardId.rows[0].id_card;
            console.log(id_card, "  id de card")
            id_cardA.push(id_card)
        } catch (error) {
            console.log(error)
        }

        try {
            const id_card = id_cardA[0]
            //crea la billetera 
            const insertwallet = await pool.query('INSERT INTO wallets (name_wallet,passwords_wallet, count_wallet, id_card) VALUES ($1,$2,$3,$4)', [name_wallet = "alfa", passwords_wallet = "123123", count_wallet = 100, id_card]);

        } catch (error) {
            console.log(error)
        }

        try {
            //id de billetera select * from public.wallets w ORDER BY id_wallet desc limit 1;
            const getWalletId = await pool.query('select * from public.wallets w ORDER BY id_wallet desc limit 1');
            const id_wallet = getWalletId.rows[0].id_card;
            console.log(id_wallet, " id de billetera")

            id_walletA.push(id_wallet)
        } catch (error) {
            console.log(error)
        }

        try {
            // // //crear clliente 
            const hash = await bcrypt.hash(password, rounds)
            console.log(hash, "+++++++++++++++++++++++", usernames);
            // console.log(req.body.username, email,hash, id_wallet, req.body.username)
            const username = usernames;
            const lastname = usernames;
            const email = datos[2];
            const insertClient = await pool.query('INSERT INTO public.clients (username, email, passwords, id_wallet, lastname) VALUES ($1, $2,$3,$4,$5)', [username, email, passwords = hash, id_wallet = id_walletA[0], lastname]);


        } catch (error) {
            console.log(error)
        }





        try {
            //update wallet for id_client
            const getClientId = await pool.query('SELECT * FROM public.clients ORDER BY id_client desc limit 1');
            const id_client = getClientId.rows[0].id_client;
            id_clientA.push(id_client)
            const username = getClientId.rows[0].username;
            usernameA.push(username)
            const email = getClientId.rows[0].email;
            emailA.push(email)

        } catch (error) {
            console.log(error)
        }


        try {
            const id_card = id_cardA[0];
            const id_client = id_clientA[0]
            const resp = await pool.query('UPDATE wallets SET id_client = $1 where id_card = $2', [
                id_client, id_card
            ]);
            console.log(resp)
        } catch (error) {
            console.log(error)
        }


        messages.push("cliente, wallet and card create")
        resp.push({ respuesta: true })
        // const username = usernameA[0];
        // const email = emailA[0];
        // const info = await pool.query(`select * from clients c inner join wallets w on c.id_wallet = w.id_wallet inner join cards c2 on w.id_card = c2.id_card inner join transactions t on w.id_wallet = t.id_wallet inner join products p on t.id_product = p.id_product where username='${username}' or email='${email}'`);
        // const data = info.rows;
        // console.log(data)
        // body.push(data)



    }


    res.json({
        message: `${messages}`,
        resp,
        // body

    })
};




module.exports = {
    get,
    getClient,
    save
};
