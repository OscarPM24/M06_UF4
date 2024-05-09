import React from 'react'

function MovieCard(props) {

    let [title, image, rate, direction] = [props.title, props.image, props.rate, props.direction];

    return(
        <>
            <p>Title: {title}</p>
            <p>Image: {image}</p>
            <p>Rate: {rate}</p>
            <p>Direction: {direction}</p>
        </>
    )

}

export default MovieCard