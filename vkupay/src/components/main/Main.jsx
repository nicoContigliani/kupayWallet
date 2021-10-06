import React, { useState } from 'react'
import SigIn from './SigIn'







const Main = () => {


    const [reg, setReg] = useState(false)


    const [log, setLog] = useState(true);
    //me debería dar un id

    return (
        <div>



            {
                log ? (
                    //  <div>aca va un login</div>

                    <SigIn></SigIn>



                ) :
                    (
                        "hola"
                    )
            }
        </div>
    )
}

export default Main
