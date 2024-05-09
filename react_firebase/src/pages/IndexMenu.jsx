import React from 'react'
import Card from '../components/Card'

function IndexMenu() {
    return (
        <>
            <Card link="/movies/list" title="Llistat de Pel·lícules" image="react_firebase/src/img/movies.png" />
            <Card link="/movies/add" title="Afegir Pel·lícules" image="react_firebase/src/img/addmovie.png" />
        </>
      )
}

export default IndexMenu;