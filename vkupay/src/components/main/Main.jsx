import React, { useState } from 'react'
import SigIn from './SigIn'







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


    const userRegister = (e) => {
        e.preventDefault()
        console.log(datosUser)
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
                            </div>

                            <div className="col-6">
                                <div className="container">
                                    <h3>
                                        SigIn

                                    </h3>
                                    <form>

                                        <div class="form-group">
                                            <label for="exampleInput">Username</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usernames" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>

                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>

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
