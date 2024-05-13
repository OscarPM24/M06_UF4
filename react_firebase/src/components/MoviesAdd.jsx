import React from 'react'
import db from "../config/config"
import { doc, setDoc } from "firebase/firestore"; 
import { useState, useEffect } from 'react';


function MoviesAdd(props) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        direction: '',
        image: '',
        rate: '',
        year: '',
        duration: ''
    });

    const afegirPelicula = async (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        try {
            const docRef = doc(db, 'pelicules', 'id');
            await setDoc(docRef, formData);
            console.log("Afegit pelicula");
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    return(
        <>
            <form onSubmit={afegirPelicula}>
                <label htmlFor="title">Títol:</label><br />
                <input type="text" id="title" name="title" required /><br />

                <label htmlFor="description">Descripció:</label><br />
                <input type="text" id="description" name="description" required /><br />

                <label htmlFor="direction">Direcció:</label><br />
                <input type="text" id="direction" name="direction" required /><br />

                <label htmlFor="image">Imatge (URL):</label><br />
                <input type="text" id="image" name="image" required /><br />
                
                <label htmlFor="rate">Nota (1/5):</label><br />
                <input type="text" id="rate" name="rate" required /><br />

                <label htmlFor="year">Any:</label><br />
                <input type="text" id="year" name="year" required /><br />

                <label htmlFor="duration">Durada (min):</label><br />
                <input type="text" id="duration" name="duration" required /><br />

                <input type="submit" />
            </form>
        </>
    )

}

export default MoviesAdd