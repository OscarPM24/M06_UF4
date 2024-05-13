import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import db from '../config/config'; 
<link rel="stylesheet" href="/styles/MovieCard.css" />

function MovieCard() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const peliculesRef = collection(db, 'pelicules');
            const q = query(peliculesRef);
            try {
                const querySnapshot = await getDocs(q);
                const movies = [];
                querySnapshot.forEach((doc) => {
                    movies.push(doc.data());
                });
                setMovies(movies);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        getMovies();
    }, []); 

    return (
        <>
            {movies.map((movie, index) => (
                <div key={index}>
                    <p>{movie.title}</p>
                    <img src={movie.image}/>
                    <p>{movie.description}</p>
                    <p>{movie.direction}</p>
                    <p>{movie.rate}/5</p>
                    <p>{movie.duration} minuts</p>
                </div>
            ))}
        </>
    );
}

export default MovieCard