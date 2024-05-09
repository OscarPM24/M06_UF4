import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <>
            <img src={props.image} />
            <Link to={props.link}>{props.title}</Link> 
        </>
    )
   


}

export default Card