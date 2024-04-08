import React from 'react'
import { useState } from 'react';
import FormulariTasques from './FormulariTasques';
import Tasca from './Tasca';

function LlistatTasques(props) {

    const[tasques, setTasques]= useState([]);

    const afegirTasca = tasca => {
        const tasquesActuals = [...tasques, tasca];
        setTasques(tasquesActuals);

        console.log(tasques)
    }

    return (
        <>
            <h1>Llistat de Tasques</h1>
            <FormulariTasques funcAfegirTasca={afegirTasca}/>

            {
                tasques.map((tasca) => {
                    <Tasca titol="hola"/>
                })
            }
        </>
    )
}

export default LlistatTasques