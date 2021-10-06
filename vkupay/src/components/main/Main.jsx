import React, { useState } from 'react'

const Main = () => {

    const [log, setLog] = useState(false);
    //me debería dar un id

    return (
        <div>
            {
                log ? (
                    <div>aca va un login</div>
                ) :
                    (
"hola"
              )
            }
        </div>
    )
}

export default Main
