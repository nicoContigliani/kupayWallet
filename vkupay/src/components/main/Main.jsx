import React, { useState } from 'react';
import SigIn from './SigIn';
import axios from 'axios';







const Main = () => {


    const [reg, setReg] = useState(false)


    const [log, setLog] = useState(true);
    //me debería dar un id




    const [datosUser, setDatosUser] = useState({
        usernames: "username",
        fullname: "fullname",
        email: "user@gmail.com",
        password: "1234567",
        card: "123456789"
    })


    const handleInputChange = (e) => {
        e.preventDefault()
        setDatosUser({
            ...datosUser,
            [e.target.name]: e.target.value
        })
    }


    const userRegister = async(e) => {
        e.preventDefault()
        console.log(datosUser)

        try {

            const resultP = await axios.post(`http://localhost:3500/sigin`, {
                username: datosUser.usernames, email: datosUser.email, password: datosUser.password
            })
            console.log(resultP.status)
            // console.log(resultP.data.body[0])
            console.log(resultP.data)
            console.log(resultP.data.resp[0].respuesta)
            // console.log(resultP.data.resp)


            if (resultP.data.resp[0].respuesta === true) {
                setLog(false)
            }

            // setMe(false)
            if (resultP.status === 200) {
                // setMe(false)
                console.log("funcion")

            }
            if (resultP.status === 400) {
                // setErr("true")
                console.log("error")
            }

            // {
            //     "usernames":"nico",
            //     "email":"ran.contigliani@gmail.com",
            //     "password":"123456789"
            // }



        } catch (error) {
            console.lo(error)
        }




    }



    const handleInputChangeS = (e) => {
        e.preventDefault()
        setDatosUser({
            ...datosUser,
            [e.target.name]: e.target.value
        })
    }



    const userLog = async (e) => {
        e.preventDefault()
        console.log({ ...datosUser })
        console.log(datosUser.usernames)

        try {

            const resultP = await axios.post(`http://localhost:3500/log`, {
                username: datosUser.usernames, email: datosUser.email, password: datosUser.password
            })
            console.log(resultP.status)
            // console.log(resultP.data.body[0])
            console.log(resultP.data)
            console.log(resultP.data.resp[0].respuesta)
            // console.log(resultP.data.resp)


            if (resultP.data.resp[0].respuesta === true) {
                setLog(false)
            }

            // setMe(false)
            if (resultP.status === 200) {
                // setMe(false)
                console.log("funcion")

            }
            if (resultP.status === 400) {
                // setErr("true")
                console.log("error")
            }

            // {
            //     "usernames":"nico",
            //     "email":"ran.contigliani@gmail.com",
            //     "password":"123456789"
            // }



        } catch (error) {
            console.lo(error)
        }
    }





    return (





        <div>



            {
                log ? (
                    //  <div>aca va un login</div>

                    // <SigIn></SigIn>

                    <div className="container">


                        <div className="row">

                            <div className="col-6">
                                <h3>
                                    Register

                                </h3>
                                <form onSubmit={userRegister}>
                                    <div class="form-group">
                                        <label for="exampleInput">Username</label>
                                        <input name="usernames" defaultValue={datosUser.usernames} onChange={handleInputChange}
                                            type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usernames" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInput">Email address</label>
                                        <input name="email" defaultValue={datosUser.email} onChange={handleInputChange}
                                            type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input name="password" defaultValue={datosUser.password} onChange={handleInputChange}
                                            type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInput">Number Card</label>
                                        <input name="card" defaultValue={datosUser.card} onChange={handleInputChange}
                                            type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Number Card" />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Send</button>
                                </form>
                                <hr />
                            </div>

                            <div className="col-6">
                                <div className="container">
                                    <h3>
                                        SigIn

                                    </h3>
                                    <form onSubmit={userLog}>

                                        <div class="form-group">
                                            <label for="exampleInput">Username</label>
                                            <input name="usernames" defaultValue={datosUser.usernames} onChange={handleInputChangeS}
                                                type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usernames" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInput">Email address</label>
                                            <input name="email" defaultValue={datosUser.email} onChange={handleInputChangeS}
                                                type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input name="password" defaultValue={datosUser.password} onChange={handleInputChangeS}
                                                type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>

                                        <button type="submit" class="btn btn-primary">Send</button>
                                    </form>
                                    <hr />
                                </div>
                            </div>
                        </div>


                    </div>





                ) :
                    (
                        "hola"
                    )
            }
        </div>
    )
}

export default Main
