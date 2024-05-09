import React from 'react'
import IndexMenu from '../pages/IndexMenu'

function Welcome(props) {

    return(
        <>
            <h1>Hola {props.username}</h1>

            <h2>Pel·lícules per a l'estiu</h2>

            <IndexMenu />
        </>
    )

}

export default Welcome;