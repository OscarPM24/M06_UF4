import React from 'react'
import { SlClose } from "react-icons/sl";
import './Tasca.css'

function Tasca(props) {

    let taskClass = props.completada == true ? "tascaCompletada" : "tascaNoCompletada";
    

    return (
        <>
            <div id={props.id} className={taskClass}>
                <h2>{props.titol}<SlClose></SlClose></h2>
            </div>
            
        </>       
    )
}

export default Tasca