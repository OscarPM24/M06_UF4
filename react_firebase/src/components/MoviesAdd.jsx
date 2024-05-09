import React from 'react'

function MoviesAdd(props) {

    return(
        <>
            <form>
                <label for="title">Títol:</label><br />
                <input type="text" id="title" name="title" required /><br />

                <label for="description">Títol:</label><br />
                <input type="text" id="description" name="description" required /><br />

                <label for="direction">Títol:</label><br />
                <input type="text" id="direction" name="direction" required /><br />

                <label for="image">Títol:</label><br />
                <input type="text" id="image" name="image" required /><br />
                
                <label for="rate">Títol:</label><br />
                <input type="text" id="rate" name="rate" required /><br />

                <label for="year">Títol:</label><br />
                <input type="text" id="year" name="year" required /><br />

                <label for="duration">Títol:</label><br />
                <input type="text" id="duration" name="duration" required /><br />

            </form>
        </>
    )

}

export default MoviesAdd